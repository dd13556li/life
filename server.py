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
        if self.path != '/api/ai':
            self.send_error(404)
            return

        length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(length)
        try:
            data = json.loads(body)
        except json.JSONDecodeError:
            self.send_error(400, 'Invalid JSON')
            return

        api_key = data.get('api_key', '').strip()
        question = data.get('question', '').strip()

        if not api_key:
            self._json(400, {'error': '請提供 API 金鑰'})
            return
        if not question:
            self._json(400, {'error': '請提供問題'})
            return

        payload = json.dumps({
            'model': 'claude-haiku-4-5-20251001',
            'max_tokens': 1500,
            'messages': [{
                'role': 'user',
                'content': (
                    f'請用繁體中文，深入且富有洞察力地回答這個人生問題：\n\n{question}\n\n'
                    '請從哲學、心理學、或人文視角提供思考，約300至400字。'
                    '語氣溫暖而有深度，引用相關哲學家或研究時請自然融入。'
                    '不要使用標題，以流暢的段落呈現。'
                )
            }]
        }).encode('utf-8')

        req = urllib.request.Request(
            'https://api.anthropic.com/v1/messages',
            data=payload,
            headers={
                'x-api-key': api_key,
                'anthropic-version': '2023-06-01',
                'content-type': 'application/json',
            }
        )

        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                result = json.loads(resp.read())
                answer = result['content'][0]['text']
                self._json(200, {'answer': answer})
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
