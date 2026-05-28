'use strict';

// ── Category metadata ──────────────────────────────────────────
const CATEGORIES = [
  { id: 'all',      label: '全部',     icon: '∞' },
  { id: '存在與意義', label: '存在與意義', icon: '◎' },
  { id: '幸福與快樂', label: '幸福與快樂', icon: '◈' },
  { id: '愛與關係',  label: '愛與關係',  icon: '♡' },
  { id: '死亡與無常', label: '死亡與無常', icon: '⌛' },
  { id: '自我與認同', label: '自我與認同', icon: '◉' },
  { id: '道德與倫理', label: '道德與倫理', icon: '⚖' },
  { id: '心經與智慧', label: '心經與智慧', icon: '卍' },
  { id: '其他',     label: '其他',     icon: '◇' },
];

const CATEGORY_ORDER = Object.fromEntries(
  CATEGORIES.filter(c => c.id !== 'all').map((c, i) => [c.id, i])
);

// ── Default seed data ──────────────────────────────────────────
const DEFAULT_QA = [

  // ── 存在與意義（由宇宙視角 → 哲學意義 → 苦難意義 → 日常實踐）──
  {
    id: 's2',
    category: '存在與意義',
    order: 1,
    subtitle: '我們是138億年宇宙演化的奇蹟——問題或許不是「為何存在」，而是「既然存在，如何存在」。',
    question: '我們為什麼存在？',
    answer: `從科學的角度：我們是138億年宇宙演化的產物。一次大爆炸、星際塵埃凝聚成恆星、恆星爆炸散播元素、地球上出現生命、數十億年的演化、最後產生了有意識的你。這一切發生的機率幾乎是零，而它偏偏發生了。

萊布尼茨問過最深刻的哲學問題：「為何存在某物，而非虛無？」這個問題至今沒有最終答案。

也許更重要的問題不是「為何存在」，而是「既然存在，如何存在」。海德格爾說，人是被「拋入」存在的——我們沒有選擇降生，但我們有選擇如何應對這份存在的自由與重量。`,
    date: '2024-01-02',
    ai: false,
  },
  {
    id: 's1',
    category: '存在與意義',
    order: 2,
    subtitle: '意義不是被找到的，而是被活出來的——每一個誠實的選擇，都是你對這個問題的回答。',
    question: '人生的意義是什麼？',
    answer: `沙特說「存在先於本質」——我們不是帶著預設意義來到世界的，意義是我們用選擇與行動一點一點創造出來的。

維克多·弗蘭克在納粹集中營中失去了一切，卻在《活出意義來》中寫道：即使在最極端的苦難中，人仍能找到意義。意義可能藏在三個地方：我們給予世界的（工作與創造）、我們從世界接受的（愛與美）、以及面對無法逃避的苦難時所持的態度。

或許「人生意義是什麼」本身就是個錯誤的問題——意義不是被找到的，而是被活出來的。每一個誠實的選擇、每一次真心的連結、每一刻的全然在場，都是你的回答。`,
    date: '2024-01-01',
    ai: false,
  },
  {
    id: 'e3',
    category: '存在與意義',
    order: 3,
    subtitle: '弗蘭克在集中營中發現：人可以承受幾乎任何「如何」，只要知道「為何」。',
    question: '苦難有意義嗎？',
    answer: `維克多·弗蘭克在納粹集中營中失去了妻子、父母，以及人一切所能失去的。但他沒有失去的，是選擇如何應對苦難的自由。

在《活出意義來》中，他記錄了一個核心發現：「人可以承受幾乎任何一種『如何』，只要能找到一個『為何』。」苦難本身不自動帶來意義，但我們面對苦難的方式，可以成為意義。

苦難有幾種可能的意義：
• 它揭示我們真正在乎什麼（我們只為真正重要的事而痛苦）
• 它破除幻覺，讓我們看見什麼是真實的
• 它成為理解他人苦難的橋梁——同理心的根基

但要小心一種危險：強迫苦難必須有意義，反而可能增加苦難的重量。有時候，苦難就是苦難。允許它如實存在，不急著賦予它故事，有時是更誠實也更溫柔的方式。`,
    date: '2024-01-15',
    ai: false,
  },
  {
    id: 'e4',
    category: '存在與意義',
    order: 4,
    subtitle: '意義不住在偉大的事業裡，它藏在全然投入的每一個平凡瞬間。',
    question: '如何在日常中創造意義？',
    answer: `人們常以為意義需要偉大的使命才能存在——要影響世界、要留下遺產。但研究顯示，意義感最強的人，往往不是做了最大的事，而是最能全然投入當下的人。

心理學家米哈伊·契克森米哈伊發現，意義感與「心流」密切相關——當你全神投入一件挑戰性剛好適中的事，時間感消失、自我感消融，那個當下就充滿了意義。

日常創造意義的三個入口：
• 用心做尋常事：煮一頓飯、傾聽一個人說話——全然在場就是意義本身
• 連結比成就更重要：研究一再顯示，真實的關係是意義感最穩固的來源
• 把走過的困難化為禮物：你曾承受的，可以成為理解他人、幫助他人的能力

意義不是找到的，是選擇去看見的。`,
    date: '2024-01-16',
    ai: false,
  },

  // ── 幸福與快樂（定義 → 常見迷思 → 心理學機制 → 日常實踐）──
  {
    id: 's3',
    category: '幸福與快樂',
    order: 1,
    subtitle: '亞里斯多德的「Eudaimonia」不只是感覺快樂，而是靈魂的蓬勃發展——活出真實的自己。',
    question: '什麼是真正的幸福？',
    answer: `亞里斯多德稱幸福為「Eudaimonia」——不只是感覺快樂，而是靈魂的蓬勃發展：活得有品德、充分發揮潛能、活出真實的自己。

現代心理學研究（馬丁·塞利格曼的正向心理學）發現幸福有五個支柱：正面情緒、投入感（心流）、正向關係、意義感、成就感。

最反直覺的研究發現：幸福最大的來源不是財富或地位，而是深刻的人際連結。哈佛大學長達85年的縱貫研究得出結論：讓人健康、快樂、長壽的最大因素，是關係的品質。

幸福不是一種擁有的狀態，而是一種存在的方式。`,
    date: '2024-01-03',
    ai: false,
  },
  {
    id: 's4',
    category: '幸福與快樂',
    order: 2,
    subtitle: '「如何花錢」比「有多少錢」更重要——花在體驗、他人和時間上，勝過花在物品上。',
    question: '金錢能帶來幸福嗎？',
    answer: `研究顯示，金錢與幸福的關係是非線性的。在基本需求得到滿足之前，更多收入確實帶來更多幸福；超過門檻後，效果快速遞減。

但「如何花錢」比「有多少錢」更重要：
• 花在體驗上勝過物品（旅行的回憶比新車更持久）
• 花在他人身上勝過自己（心理學實驗一再確認）
• 買時間勝過買東西（請人幫做不喜歡的事）

更深層的問題是：我們對金錢的渴望，往往是對其他東西的替代——安全感、認可、自由、愛。釐清自己真正需要什麼，比追逐數字更接近幸福。`,
    date: '2024-01-04',
    ai: false,
  },
  {
    id: 'f3',
    category: '幸福與快樂',
    order: 3,
    subtitle: '當挑戰剛好超越能力一點點，時間消失、自我消融——那個當下，就是人最活著的時刻。',
    question: '什麼是心流？為何它讓人感到最活著？',
    answer: `心理學家米哈伊·契克森米哈伊研究了數十年人類的幸福體驗，最終得出一個令人意外的結論：人感到最幸福的時刻，不是在放鬆休息，而是在全神投入一件有意義的挑戰。

他稱這種狀態為「心流」（Flow）：當技能與挑戰的難度恰好對齊，你會進入高度專注的狀態——時間感改變，自我意識消退，只有「做」本身存在。運動員稱它為「在狀態裡」，藝術家稱它為「靈感來了」。

心流的三個條件：
• 清晰的目標（你知道下一步要做什麼）
• 即時的回饋（你能感覺到進展或需要調整）
• 挑戰與技能的平衡（太簡單令人無聊，太難令人焦慮）

最重要的發現是：心流之後會帶來深刻的滿足感與意義感。被動的娛樂（看電視、滑手機）雖然舒適，卻很少帶來心流，因此也很少帶來真正的幸福。

設計你的生活，讓心流更容易發生——這可能是通往幸福最實用的路。`,
    date: '2024-01-17',
    ai: false,
  },
  {
    id: 'f4',
    category: '幸福與快樂',
    order: 4,
    subtitle: '哈佛研究發現，心智遊蕩的時刻是人最不快樂的時刻——幸福的種子，就在此刻。',
    question: '如何在當下找到幸福？',
    answer: `哈佛心理學家馬修·基林斯沃思和丹尼爾·吉爾伯特做過一個著名研究：他們隨機追蹤數千人，在不同時刻詢問「你在想什麼，你有多快樂」。

發現令人吃驚：人有將近47%的時間，心思不在正在做的事情上。而心智遊蕩的時刻，無論在想快樂還是中性的事，幸福感都顯著低於專注當下的時刻。結論：「漫遊的心是不快樂的心。」

這不是說我們不能計畫未來或反思過去。而是說，幸福有一個「現在」的成分，是無法在未來兌現的——它只存在於此時此刻的全然在場。

讓自己回到當下的幾個入口：
• 感官覺察（身體的重量、呼吸的節奏、空氣的溫度）
• 把注意力帶回「正在做的事」本身
• 允許無聊存在，不急著填滿它

幸福不需要等待條件成熟。它的種子，就在此刻。`,
    date: '2024-01-18',
    ai: false,
  },

  // ── 愛與關係（定義真愛 → 傾聽技藝 → 孤獨本質 → 寬恕之道）──
  {
    id: 's5',
    category: '愛與關係',
    order: 1,
    subtitle: '弗洛姆說愛是一門藝術——真愛是激情退去後，仍然選擇繼續了解的那個決定。',
    question: '什麼是真愛？',
    answer: `弗洛姆在《愛的藝術》中說：愛不是一種感覺，而是一種藝術，需要學習、練習、和紀律。它包含四個要素：關心（對對方的成長真正感興趣）、責任（回應對方的需求）、尊重（讓對方做真實的自己）、了解（深刻認識對方，而非投射幻想）。

浪漫愛情的「墜入愛河」感覺，是神經化學的現象，通常持續六個月到兩年。真愛是在激情退去之後，仍然選擇繼續了解、繼續關心、繼續成長的那個決定。

愛不是找到完美的人，而是學習如何去愛——學習接受不完美、學習在衝突中溝通、學習在脆弱中信任。`,
    date: '2024-01-05',
    ai: false,
  },
  {
    id: 'r2',
    category: '愛與關係',
    order: 2,
    subtitle: '真正的傾聽，是暫時放下自己的故事——讓對方感覺被看見，比任何建議都更有療癒力。',
    question: '我們真的懂得傾聽嗎？',
    answer: `心理學家卡爾·羅傑斯說，他做過最有力量的治療工具，不是技術或理論，而是「積極傾聽」——全然地陪伴另一個人，讓他們感覺被聽見、被理解、被接受。

我們大多數的「傾聽」，其實是在等待說話。當對方還在說，我們的腦子裡已在準備回應、比較自身經歷、評判對錯、或想辦法「解決問題」。

真正的傾聽是不同的：
• 放下評判——不急著判斷對錯，只是理解對方的世界
• 不急著修復——有時人需要的不是解答，而是被陪伴
• 反映而非投射——說出你聽到的（「你好像覺得很委屈」），而非你的詮釋
• 允許沉默——沉默有時是理解最深刻的形式

傾聽是愛最日常的實踐。每一次你真正聽見一個人，你就給了他一份稀缺的禮物：被看見的感覺。`,
    date: '2024-01-19',
    ai: false,
  },
  {
    id: 's6',
    category: '愛與關係',
    order: 3,
    subtitle: '寂寞是被迫的孤立，獨處是主動選擇與自己同在——能從獨處中帶著豐盛重返連結，是一種藝術。',
    question: '孤獨是詛咒還是禮物？',
    answer: `兩種孤獨截然不同：「寂寞」（loneliness）是被迫的孤立，帶來痛苦；「獨處」（solitude）是主動選擇與自己同在，是靈魂的呼吸。

里爾克在《給一位年輕詩人的信》中說：「你必須學習去愛你的孤獨，並承受它帶來的痛苦。因為那些你愛的人，現在還很遙遠。」

許多人類最偉大的創造，發生在獨處中。思考需要靜默，認識自己需要與外界保持距離。現代世界充滿噪音，我們不斷向外逃避，卻從未真正與自己相遇。

能夠獨處而不感到空虛，是一種成熟；能夠從獨處中帶著豐盛重返連結，是一種藝術。`,
    date: '2024-01-06',
    ai: false,
  },
  {
    id: 'r4',
    category: '愛與關係',
    order: 4,
    subtitle: '寬恕不是原諒錯誤，而是放下繼續傷害自己的怒恨——它是給自己，而非給對方的禮物。',
    question: '寬恕是為誰而做的？',
    answer: `人們常誤解寬恕，以為它意味著「說那沒關係」「接受不公正」或「必須重新信任對方」。但心理學對寬恕的定義是：放下對傷害者的怨恨、憤怒與報復欲，不是因為他們值得，而是因為你值得從那份重量中解脫。

神經科學研究顯示，長期懷恨會持續激活壓力反應系統，損害身體健康；而寬恕（即使對方沒有道歉）能夠降低壓力荷爾蒙、減少焦慮，並提升整體幸福感。

寬恕的核心悖論：它看似是給予對方的東西，實際上是給自己的。你無法改變過去發生的事，但你可以選擇不再讓那件事繼續主宰你的現在。

寬恕的過程通常不是一個決定，而是一段旅程：
• 承認受傷（不是壓抑）
• 哀悼失去的東西
• 逐漸選擇放下怨恨
• 重新定義自己：不是受害者，而是倖存者

寬恕不需要和解，不需要對方的參與。它只需要你做一個決定：不再把傷害你的那個人，租住在你心裡。`,
    date: '2024-01-20',
    ai: false,
  },

  // ── 死亡與無常（無常之美 → 面對死亡 → 如何哀悼 → 死後之謎）──
  {
    id: 's8',
    category: '死亡與無常',
    order: 1,
    subtitle: '正是因為玫瑰會凋謝，它才如此美麗——無常不是生命的缺陷，而是生命的設計。',
    question: '無常讓生命有意義嗎？',
    answer: `正是因為玫瑰會凋謝，它才如此美麗。正是因為這一刻無法被複製，它才值得全然在場。

日本美學有個概念「物哀」（もののあわれ，mono no aware）——對事物短暫性所生的淡淡哀愁與美感。日本人賞櫻，正是因為花期只有一週，才如此珍惜。

如果一切永恆不變：愛將失去深度（因為失去無所謂）、選擇將失去重量（因為還有無限時間）、當下將失去意義（因為它不是稀缺的）。

無常不是生命的缺陷，而是生命的設計。它讓每一個此刻成為獨一無二、再也不會重來的禮物。`,
    date: '2024-01-08',
    ai: false,
  },
  {
    id: 's7',
    category: '死亡與無常',
    order: 2,
    subtitle: '斯多葛哲學家每天「記住你終將死去」——不是悲觀，而是讓今天的選擇都變得真實。',
    question: '如何面對死亡？',
    answer: `斯多葛哲學家每天實踐「Memento Mori」——記住你終將死去。這不是悲觀主義，而是一種清醒的提醒：時間有限，今天的選擇都是真實的。

海德格爾說，唯有真正面對死亡的必然性，人才能從「他人」的眼光中解脫，開始活出真實的自我。否則我們只是隨波逐流，做社會期待我們做的事，而非我們真正想做的。

伊比鳩魯提供了另一個角度：「當死亡在，我不在；當我在，死亡不在。」死亡並不是可以被體驗的事物，因此不必恐懼。

面對死亡最深的回答，或許是：活得如此充實，讓死亡找來時，你已可以說——這一生，值得。`,
    date: '2024-01-07',
    ai: false,
  },
  {
    id: 'd3',
    category: '死亡與無常',
    order: 3,
    subtitle: '悲傷不是需要被解決的問題，而是愛的另一種形式——哀悼的深度，就是愛的深度。',
    question: '如何好好地哀悼？',
    answer: `心理學家曾長期使用「哀悼五階段」（否認、憤怒、討價還價、抑鬱、接受），但研究者伊莉莎白·庫伯勒-羅斯本人後來強調，這些階段並非線性的，每個人都以不同的方式走過。

悲傷最常被誤解的是：它有「應該」的樣子，或「應該」結束的時間點。社會往往期待人在幾週後「走出來」，但研究顯示，複雜性哀傷可以持續多年，而且這完全正常。

作家謝利·凱根說過一句讓人驚住的話：「如果悲傷能消失，那說明你的愛也消失了。」悲傷不是需要被解決的問題，它是愛的持續。你有多愛，就有多痛——痛，某種程度上是對那份愛的見證。

好好哀悼的方式：
• 允許悲傷存在，不急著「振作」
• 說出失去者的名字，讓他們繼續存在於語言中
• 找到見證者——有人願意陪你哀悼，比一個人承受重要得多
• 學習帶著失去繼續前行，而非「放下」

哀悼不是在告別，而是在學習如何帶著愛，繼續生活。`,
    date: '2024-01-21',
    ai: false,
  },
  {
    id: 'd4',
    category: '死亡與無常',
    order: 4,
    subtitle: '科學說沒有答案，宗教說各有答案——或許更重要的是：此岸的你想活出什麼？',
    question: '死後有什麼？',
    answer: `這是人類最古老的問題之一，也是迄今沒有人能帶著親身經歷回來回答的問題。

科學的立場：意識是大腦的產物，當大腦停止運作，意識也隨之消逝。瀕死體驗（光隧道、平靜感、全觀回顧）是真實的體驗，但神經科學認為是大腦在極端狀態下的活動，尚無令人信服的科學證據支持死後意識的存在。

各宗教傳統的視角：
• 基督教／伊斯蘭教：靈魂延續，有審判與彼岸
• 佛教：輪迴，依業力投生，最終目標是超脫輪迴的涅槃
• 印度教：梵我合一是最終解脫

哲學的轉向：伊比鳩魯說死亡是不可體驗的，因此不值得恐懼。斯多葛則說：不知死後有何，更應珍惜此刻確定擁有的。

死後有什麼，也許永遠無法確定。但這個問題，往往能幫助我們更誠實地問：我活著的時候，究竟想活出什麼？`,
    date: '2024-01-22',
    ai: false,
  },

  // ── 自我與認同（我是誰 → 自由意志 → 能否改變 → 自我接納）──
  {
    id: 's9',
    category: '自我與認同',
    order: 1,
    subtitle: '笛卡兒說「我思故我在」，佛教說「無我」——或許這不是要找答案的問題，而是要用一生去活的問題。',
    question: '我是誰？',
    answer: `笛卡兒說：「我思，故我在。」思考的存在本身就是確定的。

佛教卻說：「無我」——所謂「我」只是不斷變化的過程的幻覺，如河流，而非固定的岩石。

神經科學家說：「我」是大腦建構的一個模型，一個對身體與行為的敘事。

哲學家帕菲特說：個人身份認同是連續性的問題，不是非此即彼——「我」與昨天的我、十年後的我，都有差異。

也許「我是誰」不是一個要找答案的問題，而是一個要用一生去活的問題。你的每一個選擇、每一次面對恐懼、每一次愛與被愛，都是你對這個問題的實時回答。`,
    date: '2024-01-09',
    ai: false,
  },
  {
    id: 's10',
    category: '自我與認同',
    order: 2,
    subtitle: '即使一切都由物理因果決定，「依照自己的理性做決定」仍是真實的自由——責任不因決定論而消失。',
    question: '自由意志存在嗎？',
    answer: `這是哲學史上最棘手的問題之一。

決定論者說：一切都由物理因果決定，包括你現在讀這段文字時的感受。你的每個「決定」，都是神經元依照物理法則放電的結果。

相容論者說：即使如此，「自由意志」仍有意義——「依照自己的理性和欲望做決定，不受外部強迫」，這就是自由，它與決定論並不矛盾。

神經科學家利貝特的實驗顯示，行動前300毫秒大腦已有活動，但我們對此後悔反省的能力，也許正是一種後設層次的自由。

也許重要的不是答案，而是：無論真相如何，我們都無法逃脫「選擇」的感受，以及為選擇承擔責任的必要。這本身，就是一種自由。`,
    date: '2024-01-10',
    ai: false,
  },
  {
    id: 'i3',
    category: '自我與認同',
    order: 3,
    subtitle: '神經科學確認大腦終身可塑——改變不靠意志力，而靠環境設計、微小習慣與身份認同的轉變。',
    question: '人真的能夠改變嗎？',
    answer: `「江山易改，本性難移」——這句話我們都聽過，但它是真的嗎？

神經科學給出謹慎樂觀的答案：大腦具有「神經可塑性」（neuroplasticity），即使在成年之後，大腦仍能形成新的神經連結、改變既有的迴路。習慣是可以改變的，信念是可以更新的，甚至性格特質也可以隨時間轉變。

但改變不是靠「決定改變」就能發生的。研究顯示，意志力是有限的資源，純粹依賴意志力的改變很難持久。更有效的策略是：

• 改變環境（讓好行為變得容易、壞行為變得難）
• 從微小習慣開始（兩分鐘法則：新習慣以兩分鐘內能完成的形式開始）
• 改變身份認同（不是「我在戒菸」，而是「我是不抽菸的人」）
• 尋求關係的支持（你是你五個最常相處的人的平均）

心理學家卡蘿·杜薇克的「成長心態」研究顯示，相信自己能夠改變，本身就是改變的先決條件。

改變是可能的。但它需要的不是更大的意志力，而是更聰明的設計。`,
    date: '2024-01-23',
    ai: false,
  },
  {
    id: 'i4',
    category: '自我與認同',
    order: 4,
    subtitle: '接納不是認為現在很好，而是不以自我批判為燃料——帶著溫柔改變，遠比帶著鞭打更有力。',
    question: '自我接納是放棄成長嗎？',
    answer: `很多人害怕接納自己，因為他們以為：「如果我接受現在的自己，我就會失去改變的動力。」

但心理學研究指向相反的方向。自我批判雖然看起來像是「嚴格要求自己」，但它實際上會：
• 激活大腦的威脅反應系統，讓人進入防禦模式
• 降低學習動機（失敗後更容易放棄）
• 增加焦慮與抑鬱，消耗認知資源

心理學家克里斯汀·聶夫研究的「自我慈悲」（Self-compassion）顯示，對自己溫和的人，在失敗後反而更快站起來、更願意嘗試、更能承擔責任。

接納不是說「現在這樣就好了」。接納是說「我看見現在的自己，帶著所有不完美，依然值得善待」。從這個穩固的基礎出發，改變才能真正發生——不是為了逃脫羞恥，而是出於真心想成長。

把自我批判換成自我慈悲，不是軟弱，而是更有效的策略。`,
    date: '2024-01-24',
    ai: false,
  },

  // ── 道德與倫理（何謂善 → 道德客觀性 → 對陌生人的責任 → 兩難決策）──
  {
    id: 's11',
    category: '道德與倫理',
    order: 1,
    subtitle: '亞里斯多德、康德、彌爾、儒家各有不同答案——善是多維度的實踐，而非單一公式。',
    question: '什麼是善？',
    answer: `不同倫理傳統給出了不同答案，各有洞見：

亞里斯多德：善是「Eudaimonia」——人的蓬勃發展，依照美德活著。

康德：善是按照能成為普遍法則的原則行動，尊重每個人為目的而非手段。

功利主義（彌爾）：善是帶來最大多數人的最大幸福。

儒家：善是「仁」——對他人的真心關懷與愛，從修身齊家推及天下。

這些視角不必二選一：行善可以同時關乎品格的培養、尊重他人的尊嚴、考量行為的後果，以及維繫社群的連結。善，是多維度的實踐。`,
    date: '2024-01-11',
    ai: false,
  },
  {
    id: 'm2',
    category: '道德與倫理',
    order: 2,
    subtitle: '道德相對主義說一切都是文化決定，但「折磨無辜者是錯的」感覺更像事實，而非個人偏好。',
    question: '道德是客觀的還是主觀的？',
    answer: `「道德是主觀的」這句話常被引用，卻很少被仔細思考。如果道德真的完全主觀，那麼「納粹的屠殺是錯誤的」就只是個人偏好，就像「我不喜歡香菜」一樣。這讓大多數人感到不對勁——那種不對勁，也許本身就是一個線索。

主要立場：
• 道德相對主義：道德標準因文化而異，沒有客觀的對錯。問題：那我們如何評判歷史上的奴隸制是錯的？
• 道德主觀主義：道德陳述只表達個人情感。問題：那道德爭論就毫無意義了？
• 道德客觀主義：存在獨立於個人意見的道德真理。問題：我們如何認識這些真理？
• 道德建構主義（中間立場）：道德標準是理性存在者共同建構的，但一旦建構，就對所有人有約束力。

哲學家德里克·帕菲特在《論重要的事》中論證：道德，像邏輯一樣，存在客觀真理，我們可以在道德上犯錯，就像可以在邏輯上犯錯。

也許最誠實的立場是：我們在道德知識上仍然不完整。道德進步是真實存在的（我們今天認為奴隸制是錯的），這本身就暗示著有一個「更接近正確」的方向。`,
    date: '2024-01-25',
    ai: false,
  },
  {
    id: 's12',
    category: '道德與倫理',
    order: 3,
    subtitle: '辛格問：如果能以極小代價阻止遠方兒童的死亡，地理距離能讓道德責任消失嗎？',
    question: '我們對陌生人有道德責任嗎？',
    answer: `彼得·辛格提出「溺水兒童」思想實驗：如果你路過一個淺水池，看到一個孩子快溺死，你不會因為怕毀了衣服而不出手。那麼，為什麼地理距離能讓道德責任消失？

非洲每年有數百萬兒童因可預防的疾病死亡。我們有能力用相對微小的代價（捐款）阻止這些死亡。辛格認為，如果我們有能力阻止壞事發生，又不必為此犧牲道德上同等重要的事，那麼我們在道德上就有責任去做。

這個論證令人不安，因為它意味著我們每個人都在道德上欠下了許多。但它也開啟了一個問題：我劃定的「我們」的邊界，究竟是道德的邊界，還是只是習慣與便利的邊界？`,
    date: '2024-01-12',
    ai: false,
  },
  {
    id: 'm4',
    category: '道德與倫理',
    order: 4,
    subtitle: '沒有萬能公式——但多數智慧傳統都指向：如果每個人都這樣做，世界會變成什麼樣？',
    question: '面對道德兩難，如何做決定？',
    answer: `現實的道德決策不像哲學課上那麼乾淨。我們面對的往往不是「善與惡」的選擇，而是「兩個都有道理」或「兩個都有代價」的兩難。

幾個幫助思考的測試：

公開性測試：如果你的決定被所有相關人知道，你是否仍然能為它辯護？

康德的普遍化測試：如果每個人在相同情況下都做出相同選擇，世界會變成什麼樣？你能接受那個世界嗎？

後果測試：這個決定的短期與長期後果是什麼？誰會因此受益，誰會受到傷害？

品格測試：做了這個決定之後，你還是你想成為的那種人嗎？

實際建議：
• 先確保你的直覺是在提供道德洞察，而非反映偏見或利益
• 尋求能給你誠實回饋的人（而非只想安慰你的人）
• 接受不確定性：大多數真正的道德兩難沒有完美答案，只有更負責任的選擇

道德不是計算題，但它是可以認真思考的。`,
    date: '2024-01-26',
    ai: false,
  },

  // ── 心經與智慧（般若基礎 → 色空核心 → 無罣礙 → 面對苦難 → 無我與關係 → 不生不滅）──
  {
    id: 'h6',
    category: '心經與智慧',
    order: 1,
    subtitle: '日常聰明是往外抓取知識；般若是往內看見本來面目——放下遮蔽的執著，讓本有的智慧顯現。',
    question: '般若（智慧）與日常的聰明有何不同？',
    answer: `心經全名是《般若波羅蜜多心經》。「般若」（Prajna）常譯為「智慧」，但它指的絕不是日常的聰明、知識或分析能力。

日常的聰明是「獲得」的——你學習、記憶、分析，得到更多資訊與技巧，本質上是往外抓取。般若是「看見」的——看見事物本來的樣子，不加增減，不投射執著。日常聰明是往外看；般若是往內看，看清自心的運作方式。

「波羅蜜多」意思是「到達彼岸」。般若是渡過苦海的船——不是積累更多，而是放下遮蔽清明的種種執著，讓本有的智慧顯現。

禪宗說「本來面目」，指的正是在一切習氣與造作剝除之後，那個本來就在的清明。

這讓般若不是精英或學者的專利，而是每個人本有的能力。最接近它的日常狀態，也許就是：當你完全放下了某件事之後，忽然看見了它真正的樣子。`,
    date: '2024-02-06',
    ai: false,
  },
  {
    id: 'h1',
    category: '心經與智慧',
    order: 2,
    subtitle: '空不是虛無，而是「無自性」——正因萬物是空的、是開放的，改變才成為可能，成長才有空間。',
    question: '「色即是空，空即是色」在現代生活中意味著什麼？',
    answer: `心經的這句話常被誤解為「一切都是虛無的」，但那是誤讀。

「色」指一切有形的物質現象——你的身體、財富、名聲、成就。「空」不是虛無，而是「無自性」：一切事物沒有固定不變的本質，它們都是因緣和合而暫時存在的，沒有任何事物能靠自己獨立成立。

在現代生活中，這句話的意義是：你緊緊抓住的一切——地位、身份、「應有的」結果——都沒有你以為的那種堅實。你的成功是空的，你的失敗也是空的，它們都是暫時的因緣現象，而非你的本質。

「空即是色」同樣不可忽略：空並非消極的虛無。正因為萬物是空的、是開放的，改變才成為可能，成長才有空間，一切美好才能在無常中顯現。空性不是否定，而是一切可能性的根基。`,
    date: '2024-02-01',
    ai: false,
  },
  {
    id: 'h3',
    category: '心經與智慧',
    order: 3,
    subtitle: '有能力愛，卻不被愛所控制；有能力努力，卻不被成敗所定義——這是修行的目標，不是起點。',
    question: '「心無罣礙」是否真的可能？',
    answer: `心經說：「心無罣礙，無罣礙故，無有恐怖，遠離顛倒夢想，究竟涅槃。」

「罣礙」是心理上的掛慮、執著與阻礙。我們的心之所以有罣礙，是因為對某些事物強烈執著（想得到），或強烈排斥（想逃避），而這兩者的底層，都是「保護自我」的本能在運作。

「心無罣礙」並非叫我們對一切漠然，而是指：我們能充分地活在當下、投入生命，卻不被結果所困。就像水流過石頭，水確實流過，石頭確實在那裡，但水不會被石頭所困。

這不是冷漠，而是一種更深的自由——有能力愛，卻不被愛所控制；有能力努力，卻不被成敗所定義；有能力感受，卻不被情緒所淹沒。

這是修行的目標，不是起點。日常中每一次覺察到自己的掛礙，就已經是開始了。`,
    date: '2024-02-03',
    ai: false,
  },
  {
    id: 'h2',
    category: '心經與智慧',
    order: 4,
    subtitle: '苦難的根源往往在於執著——看清一切現象的流動性，苦就失去了最銳利的邊角。',
    question: '心經如何幫助我們面對苦難？',
    answer: `心經開篇即說觀自在菩薩「照見五蘊皆空，度一切苦厄」——透過深刻看清五蘊（色、受、想、行、識）的空性，可以渡過一切苦難。

苦難的根源，往往在於執著。我以為這段關係是永恆的，以為這份工作是「我的」，以為身體應該長保健康——當現實打破這些執著，苦就從那道裂縫中湧入。

心經不是叫我們麻木不仁，而是邀請我們看清：所有的苦，都與「我」的執著密切相關。當我們能以更寬廣的眼光看見一切現象的流動性，苦就失去了最銳利的邊角。

這需要一種逆反直覺的練習：不是壓制或逃避痛苦，而是轉向它、看清它，問：「這份苦，抓住的是什麼？」在那個問題裡，往往藏著鬆開的可能。`,
    date: '2024-02-02',
    ai: false,
  },
  {
    id: 'h4',
    category: '心經與智慧',
    order: 5,
    subtitle: '縮小「我」，關係就有了呼吸的空間——「無我」不是失去自己，而是以更寬廣的自己去遇見他人。',
    question: '心經的「無我」如何改變人際關係？',
    answer: `心經說「無眼耳鼻舌身意，無色聲香味觸法」——六根六塵，也就是我們感知世界的整套機制，都是無自性的。我們以為的那個固定的「我」，只是暫時的因緣和合。

在人際關係中，「無我」帶來一種深刻的解放。

當「我」的邊界變得柔軟，「我的看法」、「我的受傷」、「我才是對的」，就不再那麼絕對。我能更清楚地看見對方的真實需求，而不只是他們如何影響「我」。

馬丁·布伯說的「我—你」關係（I-Thou）——真正地遇見另一個人，而非只是遇見他們對「我」的意義——也許正是心經「無我」在關係中的具體實踐。

「無我」並不意味著失去自己，而是以一個更寬廣的自己去遇見他人。縮小「我」，關係就有了呼吸的空間。`,
    date: '2024-02-04',
    ai: false,
  },
  {
    id: 'h5',
    category: '心經與智慧',
    order: 6,
    subtitle: '構成你的原子在你出生前就已存在幾十億年——死亡或許不是終結，而是回歸更廣大的流動之中。',
    question: '「不生不滅」如何影響我們對死亡的看法？',
    answer: `心經說：「不生不滅，不垢不淨，不增不減。」

在現象的層面，萬物確實有生有滅。但在究竟的層面——空性的層面——沒有真正的生，也沒有真正的滅。就像水結成冰，冰消融為水：形態變了，而「水」的本質從未真正生滅。

對於死亡，這個視角提供了一種深刻的再思考：你現在的存在，以某種形式，在整個宇宙的因果相續中從未間斷。構成你的原子，在你出生前就已存在了幾十億年；在你死後，它們將以另一種形式繼續流轉。

更重要的是：如果我們緊抓著的那個「我」本來就只是因緣和合的暫時現象，它的消散，也不過是回歸那更廣大的流動之中。

這不是讓死亡變得不重要，而是讓生命變得更透明——透明到可以看見那個更大的連續。`,
    date: '2024-02-05',
    ai: false,
  },

  // ── 其他（時間哲學 → 科技與自由）──
  {
    id: 'o1',
    category: '其他',
    order: 1,
    subtitle: '物理說過去、現在、未來同樣真實；神經科學說「現在」是事後建構的——我們或許永遠活在過去的投影中。',
    question: '時間是真實的嗎？',
    answer: `「時間是什麼？如果沒人問我，我知道；如果有人問我，我便不知道了。」——聖奧古斯丁在一千六百年前就發現了這個難題，直到今天它仍然沒有完整的答案。

物理學的困惑：愛因斯坦的相對論揭示，時間不是絕對的，它會因速度和重力而膨脹或收縮。更深層的是，在物理方程式中，過去、現在和未來在原則上是同樣真實的——「現在」並沒有特殊的物理地位。物理學家稱這為「塊狀宇宙」（Block Universe）：整個時間軸是一個靜止的整體，「流動」只是我們的感知。

神經科學的版本：我們對時間的感知，是大腦的建構。實驗顯示，大腦實際上是「回溯性地」建構「現在」——你所體驗的此刻，其實是大腦在數百毫秒前的神經活動的事後詮釋。嚴格說來，我們永遠活在過去的投影中。

佛教的洞見：禪宗說「活在當下」，但心經說時間本身是一種執著——只有當我們停止把時間視為流動的河流，而看見它是靜止的整體，某種束縛才能鬆開。

時間是真實的嗎？也許比我們以為的更少，也比我們以為的更多。`,
    date: '2024-03-01',
    ai: false,
  },
  {
    id: 'o2',
    category: '其他',
    order: 2,
    subtitle: '我們擁有前所未有的連結能力，卻也第一次感受到被演算法控制注意力的恐懼——自由需要被重新定義。',
    question: '科技讓我們更自由還是更不自由？',
    answer: `自由主義哲學傳統對自由有兩種定義：
消極自由：不被他人阻礙的自由——「離開X的自由」
積極自由：有能力實現自己目標的自由——「去做X的自由」

科技在這兩個維度上給出了矛盾的答案。

科技增加了自由的面向：
• 資訊取得的自由（人類知識幾乎無限觸及）
• 表達的自由（任何人都能發聲）
• 選擇的自由（更多選項、更多可能性）
• 逃脫地理限制的自由（遠距工作、全球連結）

科技減少了自由的面向：
• 注意力被設計所捕獲（社群媒體的無限滾動、通知轟炸）
• 選擇過載造成癱瘓（Barry Schwartz「選擇的悖論」）
• 監控資本主義（你的行為數據被用於預測和影響你的選擇）
• 永遠在線的壓力（從不真正「離線」）

哲學家伯納德·斯蒂格勒警告：技術不只是工具，它塑造了使用者的欲望和感知。當演算法決定你看什麼、想什麼，「自由意志」的範圍就在悄悄縮小。

科技本身沒有意識形態，但它的設計者有。自由的問題，最終是：誰在設計這個系統，為了誰的利益？`,
    date: '2024-03-02',
    ai: false,
  },
];

// ── State ──────────────────────────────────────────────────────
let state = {
  qaList: [],
  currentCategory: 'all',
  searchQuery: '',
  editingId: null,
  viewingId: null,
  viewMode: 'grid',
  settings: { apiKey: '' },
};

// ── Storage helpers ────────────────────────────────────────────
function loadFromStorage() {
  try {
    const raw = localStorage.getItem('life_qa_data');
    if (raw) {
      state.qaList = JSON.parse(raw);
      mergeNewDefaults();
      migrateData();
    } else {
      state.qaList = DEFAULT_QA;
      saveToStorage();
    }
    const settings = localStorage.getItem('life_qa_settings');
    if (settings) state.settings = JSON.parse(settings);
    const viewMode = localStorage.getItem('life_qa_viewmode');
    if (viewMode) state.viewMode = viewMode;
  } catch (e) {
    state.qaList = DEFAULT_QA;
  }
}

function mergeNewDefaults() {
  const existingIds = new Set(state.qaList.map(q => q.id));
  const toAdd = DEFAULT_QA.filter(q => !existingIds.has(q.id));
  if (toAdd.length > 0) {
    state.qaList = state.qaList.concat(toAdd);
    saveToStorage();
  }
}

function migrateData() {
  const defaults = Object.fromEntries(DEFAULT_QA.map(q => [q.id, q]));
  let changed = false;
  state.qaList = state.qaList.map(q => {
    const def = defaults[q.id];
    if (!def) return q;
    let updated = q;
    if (!updated.subtitle && def.subtitle) { updated = { ...updated, subtitle: def.subtitle }; changed = true; }
    if (updated.order === undefined && def.order !== undefined) { updated = { ...updated, order: def.order }; changed = true; }
    return updated;
  });
  if (changed) saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('life_qa_data', JSON.stringify(state.qaList));
}

function saveSettingsToStorage() {
  localStorage.setItem('life_qa_settings', JSON.stringify(state.settings));
}

// ── Filtering & sorting ────────────────────────────────────────
function getFiltered() {
  let list = state.qaList;
  if (state.currentCategory !== 'all') {
    list = list.filter(q => q.category === state.currentCategory);
  }
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(item =>
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  }
  return [...list].sort((a, b) => {
    if (state.currentCategory === 'all') {
      const catA = CATEGORY_ORDER[a.category] ?? 99;
      const catB = CATEGORY_ORDER[b.category] ?? 99;
      if (catA !== catB) return catA - catB;
    }
    const ao = a.order ?? 9999;
    const bo = b.order ?? 9999;
    if (ao !== bo) return ao - bo;
    return a.date < b.date ? -1 : 1;
  });
}

function countByCategory(catId) {
  if (catId === 'all') return state.qaList.length;
  return state.qaList.filter(q => q.category === catId).length;
}

// ── Rendering ──────────────────────────────────────────────────
function renderCategories() {
  const nav = document.getElementById('categoryNav');
  nav.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const count = countByCategory(cat.id);
    const btn = document.createElement('button');
    btn.className = 'cat-btn' + (state.currentCategory === cat.id ? ' active' : '');
    btn.dataset.cat = cat.id;
    btn.innerHTML = `
      <span class="cat-icon">${cat.icon}</span>
      <span class="cat-label">${cat.label}</span>
      <span class="cat-count">${count}</span>
    `;
    btn.addEventListener('click', () => {
      state.currentCategory = cat.id;
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const titleMap = Object.fromEntries(CATEGORIES.map(c => [c.id, c.label === '全部' ? '全部問答' : c.label]));
      document.getElementById('currentTitle').textContent = titleMap[cat.id] || cat.label;
      renderGrid();
    });
    nav.appendChild(btn);
  });
}

function renderGrid() {
  const filtered = getFiltered();
  const grid = document.getElementById('qaGrid');
  const empty = document.getElementById('emptyMsg');

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';
  grid.className = 'qa-grid' + (state.viewMode === 'list' ? ' list-view' : '');

  grid.innerHTML = filtered.map(item => {
    const preview = item.subtitle
      ? item.subtitle
      : (item.answer.replace(/\n/g, ' ').slice(0, 120) + (item.answer.length > 120 ? '…' : ''));
    const previewClass = item.subtitle ? 'card-subtitle' : 'card-preview';
    return `
      <div class="qa-card" onclick="openView('${item.id}')">
        <div class="card-body">
          <div class="card-category">${escHtml(item.category)}</div>
          <div class="card-question">${escHtml(item.question)}</div>
          <div class="${previewClass}">${escHtml(preview)}</div>
          <div class="card-footer">
            <span class="card-date">${item.date}</span>
            ${item.ai ? '<span class="card-ai-badge">✦ AI</span>' : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function escHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function setView(mode) {
  state.viewMode = mode;
  localStorage.setItem('life_qa_viewmode', mode);
  document.getElementById('btnGrid').classList.toggle('active', mode === 'grid');
  document.getElementById('btnList').classList.toggle('active', mode === 'list');
  renderGrid();
}

// ── View modal ─────────────────────────────────────────────────
function openView(id) {
  const item = state.qaList.find(q => q.id === id);
  if (!item) return;
  state.viewingId = id;
  document.getElementById('vmCategory').textContent = item.category;
  document.getElementById('vmQuestion').textContent = item.question;
  document.getElementById('vmAnswer').textContent = item.answer;
  document.getElementById('vmDate').textContent = item.date + (item.ai ? '　✦ AI 生成' : '');
  document.getElementById('viewModal').style.display = 'flex';
}

function closeView() {
  document.getElementById('viewModal').style.display = 'none';
  state.viewingId = null;
}

// ── Edit modal ─────────────────────────────────────────────────
function openAdd() {
  state.editingId = null;
  document.getElementById('editTitle').textContent = '新增問答';
  document.getElementById('fQuestion').value = '';
  document.getElementById('fAnswer').value = '';
  document.getElementById('fCategory').value = '存在與意義';
  document.getElementById('editModal').style.display = 'flex';
  setTimeout(() => document.getElementById('fQuestion').focus(), 100);
}

function openEdit(id) {
  const item = state.qaList.find(q => q.id === id);
  if (!item) return;
  state.editingId = id;
  document.getElementById('editTitle').textContent = '編輯問答';
  document.getElementById('fQuestion').value = item.question;
  document.getElementById('fAnswer').value = item.answer;
  document.getElementById('fCategory').value = item.category;
  document.getElementById('editModal').style.display = 'flex';
}

function closeEdit() {
  document.getElementById('editModal').style.display = 'none';
  state.editingId = null;
}

function saveQA() {
  const question = document.getElementById('fQuestion').value.trim();
  const answer = document.getElementById('fAnswer').value.trim();
  const category = document.getElementById('fCategory').value;

  if (!question) { document.getElementById('fQuestion').focus(); return; }
  if (!answer) { document.getElementById('fAnswer').focus(); return; }

  const today = new Date().toISOString().slice(0, 10);

  if (state.editingId) {
    const idx = state.qaList.findIndex(q => q.id === state.editingId);
    if (idx !== -1) {
      state.qaList[idx] = { ...state.qaList[idx], question, answer, category };
    }
  } else {
    state.qaList.unshift({
      id: 'u' + Date.now(),
      question, answer, category,
      order: 9999,
      date: today,
      ai: false,
    });
  }

  saveToStorage();
  closeEdit();
  renderCategories();
  renderGrid();
}

// ── Delete ─────────────────────────────────────────────────────
function deleteQA(id) {
  if (!confirm('確定要刪除這個問答嗎？')) return;
  state.qaList = state.qaList.filter(q => q.id !== id);
  saveToStorage();
  closeView();
  renderCategories();
  renderGrid();
}

// ── AI generation ──────────────────────────────────────────────
async function generateAI() {
  const question = document.getElementById('fQuestion').value.trim();
  if (!question) {
    alert('請先輸入問題');
    document.getElementById('fQuestion').focus();
    return;
  }
  if (!state.settings.apiKey) {
    alert('請先在設定中輸入 Claude API 金鑰，並使用 server.py 啟動本地伺服器。');
    return;
  }
  if (window.location.protocol === 'file:') {
    alert('AI 功能需要透過本地伺服器使用。\n請執行：python server.py\n然後至 http://localhost:8080 開啟。');
    return;
  }

  const btn = document.getElementById('aiBtn');
  const loading = document.getElementById('aiLoading');
  btn.disabled = true;
  loading.style.display = 'flex';

  try {
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, api_key: state.settings.apiKey }),
    });
    if (!res.ok) throw new Error(`伺服器錯誤 ${res.status}`);
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    document.getElementById('fAnswer').value = data.answer;
  } catch (err) {
    alert('AI 生成失敗：' + err.message);
  } finally {
    btn.disabled = false;
    loading.style.display = 'none';
  }
}

// ── Settings modal ─────────────────────────────────────────────
function openSettings() {
  document.getElementById('sApiKey').value = state.settings.apiKey || '';
  document.getElementById('settingsModal').style.display = 'flex';
}

function closeSettings() {
  document.getElementById('settingsModal').style.display = 'none';
}

function saveSettings() {
  state.settings.apiKey = document.getElementById('sApiKey').value.trim();
  saveSettingsToStorage();
  updateAIStatus();
  closeSettings();
}

function updateAIStatus() {
  const el = document.getElementById('aiStatus');
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const hasKey = !!state.settings.apiKey;
  if (isLocal && hasKey) {
    el.className = 'ai-status active';
    el.querySelector('span:last-child').textContent = 'AI 功能已啟用';
  } else {
    el.className = 'ai-status inactive';
    el.querySelector('span:last-child').textContent = 'AI 功能未啟用';
  }
}

// ── Export / Reset ─────────────────────────────────────────────
function exportData() {
  const blob = new Blob([JSON.stringify(state.qaList, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `人生大哉問_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
}

function resetData() {
  if (!confirm('確定要重置所有資料為預設內容嗎？目前的資料將會遺失。')) return;
  state.qaList = DEFAULT_QA;
  saveToStorage();
  renderCategories();
  renderGrid();
  closeSettings();
}

// ── Search ─────────────────────────────────────────────────────
let searchTimer = null;
document.getElementById('searchInput').addEventListener('input', e => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.searchQuery = e.target.value.trim();
    renderGrid();
  }, 250);
});

// ── Event bindings ─────────────────────────────────────────────
document.getElementById('addBtn').addEventListener('click', openAdd);
document.getElementById('emptyAddBtn').addEventListener('click', openAdd);
document.getElementById('settingsBtn').addEventListener('click', openSettings);

document.getElementById('vmEdit').addEventListener('click', () => {
  const id = state.viewingId;
  closeView();
  openEdit(id);
});

document.getElementById('vmDelete').addEventListener('click', () => {
  deleteQA(state.viewingId);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeView();
    closeEdit();
    closeSettings();
  }
});

// ── Init ───────────────────────────────────────────────────────
loadFromStorage();
renderCategories();
renderGrid();
updateAIStatus();
