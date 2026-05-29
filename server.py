"""
本地伺服器：提供靜態檔案，並代理 Claude AI 請求。
使用方式：python server.py
然後至 http://localhost:8080 開啟知識庫。
"""

import json
import os
import urllib.request
import urllib.error
from http.server import HTTPServer, SimpleHTTPRequestHandler


class Handler(SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        print(f"  {self.address_string()} {fmt % args}")

    def do_OPTIONS(self):
        self.send_response(200)
        self._cors()
        self.end_headers()

    def do_POST(self):
        if self.path not in ('/api/ai', '/api/chat', '/api/plan'):
            self.send_error(404)
            return

        length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(length)
        try:
            data = json.loads(body)
        except json.JSONDecodeError:
            self.send_error(400, 'Invalid JSON')
            return

        if self.path == '/api/ai':
            self._handle_ai(data)
        elif self.path == '/api/plan':
            self._handle_plan(data)
        else:
            self._handle_chat(data)

    def _handle_ai(self, data):
        api_key = data.get('api_key', '').strip()
        question = data.get('question', '').strip()
        if not api_key:
            self._json(400, {'error': '請提供 API 金鑰'}); return
        if not question:
            self._json(400, {'error': '請提供問題'}); return

        payload = {
            'model': 'claude-haiku-4-5-20251001',
            'max_tokens': 2500,
            'messages': [{'role': 'user', 'content': (
                f'請用繁體中文，深入且富有洞察力地回答這個人生問題：\n\n{question}\n\n'
                '請嚴格按照以下 JSON 格式回應（不要輸出任何其他內容）：\n\n'
                '{\n'
                '  "answer": "主要答案，從哲學、心理學、或人文視角提供思考，約300至400字。語氣溫暖而有深度，引用相關哲學家或研究時請自然融入。不要使用標題，以流暢的段落呈現。",\n'
                '  "science": "科學驗證，100至150字。引用相關心理學、神經科學、或社會科學研究，用繁體中文說明這個哲學洞見的實證基礎。",\n'
                '  "practice": "今日實踐，60至100字。一個今天就可以做的具體行動，要有操作性和可執行性，讓人讀完後知道如何立刻嘗試。"\n'
                '}'
            )}]
        }
        self._call_anthropic(api_key, payload, lambda r: {'answer': r['content'][0]['text']})

    def _handle_chat(self, data):
        api_key = data.get('api_key', '').strip()
        messages = data.get('messages', [])
        system = data.get('system', '')
        if not api_key:
            self._json(400, {'error': '請提供 API 金鑰'}); return
        if not messages:
            self._json(400, {'error': '請提供對話內容'}); return

        payload = {
            'model': 'claude-haiku-4-5-20251001',
            'max_tokens': 800,
            'system': system,
            'messages': messages[-10:],
        }
        self._call_anthropic(api_key, payload, lambda r: {'reply': r['content'][0]['text']})

    def _handle_plan(self, data):
        api_key = data.get('api_key', '').strip()
        theme = data.get('theme', '').strip()
        context = data.get('context', '').strip()
        if not api_key:
            self._json(400, {'error': '請提供 API 金鑰'}); return
        if not theme:
            self._json(400, {'error': '請提供計畫主題'}); return

        prompt = (
            f'請為「{theme}」這個主題，設計一個 30 天的個人成長行動計畫。'
            + (f'\n\n使用者背景：{context}' if context else '')
            + '\n\n設計原則：\n'
            '- 循序漸進：前期（1-10天）建立覺察與基礎，中期（11-20天）深化練習，後期（21-30天）整合與內化\n'
            '- 每天一個「今天就能做」的具體微行動，控制在 15 分鐘內可完成\n'
            '- 行動要具體可操作，避免空泛口號（例如不要說「保持正念」，而要說「吃飯時放下手機，專注感受前三口的味道」）\n'
            '- 語氣溫暖而有深度，融入相關哲學或心理學智慧\n\n'
            '請嚴格回傳以下 JSON 格式（不要輸出任何其他文字）：\n'
            '{\n'
            '  "title": "計畫標題（簡短有力，12字內）",\n'
            '  "intro": "一句話說明這 30 天會帶你經歷什麼（40字內）",\n'
            '  "days": [\n'
            '    {"day": 1, "action": "當天的具體行動（30-70字）", "focus": "當天主題詞（4字內）"}\n'
            '  ]\n'
            '}\n'
            '注意：days 陣列必須剛好包含 30 個物件，day 從 1 到 30。'
        )
        payload = {
            'model': 'claude-haiku-4-5-20251001',
            'max_tokens': 4096,
            'messages': [{'role': 'user', 'content': prompt}],
        }
        self._call_anthropic(api_key, payload, lambda r: {'plan': r['content'][0]['text']})

    def _call_anthropic(self, api_key, payload, extract_fn):
        req = urllib.request.Request(
            'https://api.anthropic.com/v1/messages',
            data=json.dumps(payload, ensure_ascii=False).encode('utf-8'),
            headers={
                'x-api-key': api_key,
                'anthropic-version': '2023-06-01',
                'content-type': 'application/json',
            }
        )
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                self._json(200, extract_fn(json.loads(resp.read())))
        except urllib.error.HTTPError as e:
            err_body = e.read().decode('utf-8', errors='replace')
            print(f'  Anthropic API 錯誤 {e.code}: {err_body}')
            self._json(e.code, {'error': f'API 錯誤 {e.code}: {err_body}'})
        except Exception as e:
            print(f'  錯誤: {e}')
            self._json(500, {'error': str(e)})

    def _cors(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def _json(self, code, data):
        body = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.send_response(code)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self._cors()
        self.send_header('Content-Length', len(body))
        self.end_headers()
        self.wfile.write(body)


if __name__ == '__main__':
    port = 8080
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    print(f'\n  人生大哉問 — 本地伺服器')
    print(f'  ─────────────────────────')
    print(f'  http://localhost:{port}')
    print(f'  按 Ctrl+C 停止\n')
    try:
        HTTPServer(('', port), Handler).serve_forever()
    except KeyboardInterrupt:
        print('\n  伺服器已停止')
