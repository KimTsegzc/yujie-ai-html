/**
 * ===================================================================
 * CLAW 演示系统 - 颜色主题配置中心
 * ===================================================================
 * 版本：v8.0
 * 作用：统一管理所有颜色主题，主HTML和子HTML共享此配置
 *
 * 如何新增/修改主题：
 *   1. 在 THEMES 对象中新增一个 key（主题名）和对应的颜色值
 *   2. 在 THEME_META 中补充显示名称和色盘预览颜色
 *   3. 在主HTML的 .theme-swatch 列表中添加对应按钮即可
 *
 * CSS 变量说明：
 *   --bg         页面最深背景色（主背景）
 *   --bg2        次级背景色（卡片、面板）
 *   --bg3        三级背景色（高亮区域、悬浮态）
 *   --gold       品牌强调色（标题、图标、边框高亮）⬅ 核心调整项
 *   --gold-bright  强调色亮版（hover状态、高亮文字）
 *   --gold-dim   强调色透明版（背景填充、柔和区域）
 *   --text       主文本颜色
 *   --text-dim   次级文本颜色（描述、标签）
 *   --border     边框颜色（带透明度）
 *   --red        警示/下跌颜色
 *   --green      成功/上涨颜色
 *   --sidebar-bg   侧边栏背景
 *   --card-bg    卡片背景
 * ===================================================================
 */

window.CLAW_THEMES = {

  /* ──────────────────────────────────────────────
   * 🏆 黑金（默认）— 权威、高端、金融质感
   * 品牌色：暗金 #C9A84C → 亮金 #E8C97A
   * 背景：纯黑 #0A0A0F
   * ────────────────────────────────────────────── */
  'black-gold': {
    '--bg':             '#0A0A0F',
    '--bg2':            '#111118',
    '--bg3':            '#1C1C26',
    '--gold':           '#C9A84C',
    '--gold-bright':    '#E8C97A',
    '--gold-dim':       'rgba(201,168,76,0.15)',
    '--text':           '#E8E4D8',
    '--text-dim':       '#9A9080',
    '--border':         'rgba(201,168,76,0.2)',
    '--red':            '#FF5252',
    '--green':          '#2ED573',
    '--sidebar-bg':     '#060608',
    '--sidebar-text':   '#E8E4D8',
    '--sidebar-active': 'rgba(201,168,76,0.12)',
        /* 透明度变体（自动计算，随金色变化） */
    '--gold-04': 'rgba(201,168,76,0.04)',
    '--gold-05': 'rgba(201,168,76,0.05)',
    '--gold-08': 'rgba(201,168,76,0.08)',
    '--gold-10': 'rgba(201,168,76,0.1)',
    '--gold-12': 'rgba(201,168,76,0.12)',
    '--gold-15': 'rgba(201,168,76,0.15)',
    '--gold-20': 'rgba(201,168,76,0.2)',
    '--gold-30': 'rgba(201,168,76,0.3)',
    '--gold-40': 'rgba(201,168,76,0.4)',
    '--gold-50': 'rgba(201,168,76,0.5)',
    '--card-bg':        '#111118',
  },

  /* ──────────────────────────────────────────────
   * 🌊 深海蓝 — Maastricht Blue 精准色系
   * 品牌色：Pale Cerulean #9ABCE0 → Columbia Blue #C4D4E6
   * 背景：#031E36 → #04335A → #4474A3
   * ────────────────────────────────────────────── */
  'deep-ocean': {
    '--bg':             '#031E36',
    '--bg2':            '#04335A',
    '--bg3':            '#4474A3',
    '--gold':           '#9ABCE0',
    '--gold-bright':    '#C4D4E6',
    '--gold-dim':       'rgba(154,188,224,0.15)',
    '--text':           '#C4D4E6',
    '--text-dim':       '#9ABCE0',
    '--border':         'rgba(154,188,224,0.2)',
    '--red':            '#E07878',
    '--green':          '#6FCFA0',
    '--sidebar-bg':     '#021628',
    '--sidebar-text':   '#C4D4E6',
    '--sidebar-active': 'rgba(154,188,224,0.15)',
        /* 透明度变体（自动计算，随金色变化） */
    '--gold-04': 'rgba(154,188,224,0.04)',
    '--gold-05': 'rgba(154,188,224,0.05)',
    '--gold-08': 'rgba(154,188,224,0.08)',
    '--gold-10': 'rgba(154,188,224,0.1)',
    '--gold-12': 'rgba(154,188,224,0.12)',
    '--gold-15': 'rgba(154,188,224,0.15)',
    '--gold-20': 'rgba(154,188,224,0.2)',
    '--gold-30': 'rgba(154,188,224,0.3)',
    '--gold-40': 'rgba(154,188,224,0.4)',
    '--gold-50': 'rgba(154,188,224,0.5)',
    '--card-bg':        '#04335A',
  },

  /* ──────────────────────────────────────────────
   * 🧊 冰川蓝 — 清新冷峻，专业商务
   * 品牌色：深海蓝 #2E4265 → 深海军蓝 #1D3354
   * 背景：浅灰蓝 #E8ECF0 → 中灰蓝 #D5D5D6
   * ────────────────────────────────────────────── */
  'glacier-blue': {
    '--bg':             '#F5F1EC',
    '--bg2':            '#EAE4DD',
    '--bg3':            '#A8B5C2',
    '--gold':           '#2E4265',
    '--gold-bright':    '#1D3354',
    '--gold-dim':       'rgba(46,66,101,0.12)',
    '--text':           '#2E4265',
    '--text-dim':       '#8599AB',
    '--border':         'rgba(46,66,101,0.2)',
    '--red':            '#C0392B',
    '--green':          '#27AE60',
    '--sidebar-bg':     '#EAE4DD',
    '--sidebar-text':   '#2E4265',
    '--sidebar-active': 'rgba(46,66,101,0.1)',
    '--card-bg':        '#EAE4DD',
        /* 透明度变体（自动计算，随金色变化） */
    '--gold-04': 'rgba(46,66,101,0.04)',
    '--gold-05': 'rgba(46,66,101,0.05)',
    '--gold-08': 'rgba(46,66,101,0.08)',
    '--gold-10': 'rgba(46,66,101,0.1)',
    '--gold-12': 'rgba(46,66,101,0.12)',
    '--gold-15': 'rgba(46,66,101,0.15)',
    '--gold-20': 'rgba(46,66,101,0.2)',
    '--gold-30': 'rgba(46,66,101,0.3)',
    '--gold-40': 'rgba(46,66,101,0.4)',
    '--gold-50': 'rgba(46,66,101,0.5)',
  },

  /* ──────────────────────────────────────────────
   * 🍂 秋暮 — 深秋暖调，沉稳典雅
   * 品牌色：暖米金 #D5B893 → 亮米金 #E8D4B8
   * 背景：深海军蓝 #151D2B → 石板灰 #617891
   * ────────────────────────────────────────────── */
  'autumn-dusk': {
    '--bg':             '#151D2B',
    '--bg2':            '#25344F',
    '--bg3':            '#617891',
    '--gold':           '#D5B893',
    '--gold-bright':    '#E8D4B8',
    '--gold-dim':       'rgba(213,184,147,0.15)',
    '--text':           '#E8D4B8',
    '--text-dim':       '#D5B893',
    '--border':         'rgba(213,184,147,0.2)',
    '--red':            '#C04048',
    '--green':          '#6FCFA0',
    '--sidebar-bg':     '#111828',
    '--sidebar-text':   '#E8D4B8',
    '--sidebar-active': 'rgba(213,184,147,0.12)',
    '--card-bg':        '#25344F',
        /* 透明度变体（自动计算，随金色变化） */
    '--gold-04': 'rgba(213,184,147,0.04)',
    '--gold-05': 'rgba(213,184,147,0.05)',
    '--gold-08': 'rgba(213,184,147,0.08)',
    '--gold-10': 'rgba(213,184,147,0.1)',
    '--gold-12': 'rgba(213,184,147,0.12)',
    '--gold-15': 'rgba(213,184,147,0.15)',
    '--gold-20': 'rgba(213,184,147,0.2)',
    '--gold-30': 'rgba(213,184,147,0.3)',
    '--gold-40': 'rgba(213,184,147,0.4)',
    '--gold-50': 'rgba(213,184,147,0.5)',
  },

  /* ──────────────────────────────────────────────
   * 🌅 落日余烬 — 深色打底，暖橙色调
   * 品牌色：亮橙 #FF971E → 柔橙 #FFB347
   * 背景：深棕黑 #1A1814 → 深橄榄金 #74601B
   * ────────────────────────────────────────────── */
  'sunset-ember': {
    '--bg':             '#1A1814',
    '--bg2':            '#2A261E',
    '--bg3':            '#74601B',
    '--gold':           '#FF971E',
    '--gold-bright':    '#FFB347',
    '--gold-dim':       'rgba(255,151,30,0.15)',
    '--text':           '#F0E8DC',
    '--text-dim':       '#A8A7A3',
    '--border':         'rgba(255,151,30,0.2)',
    '--red':            '#DB4600',
    '--green':          '#6FCFA0',
    '--sidebar-bg':     '#151210',
    '--sidebar-text':   '#F0E8DC',
    '--sidebar-active': 'rgba(255,151,30,0.12)',
    '--card-bg':        '#2A261E',
        /* 透明度变体（自动计算，随金色变化） */
    '--gold-04': 'rgba(255,151,30,0.04)',
    '--gold-05': 'rgba(255,151,30,0.05)',
    '--gold-08': 'rgba(255,151,30,0.08)',
    '--gold-10': 'rgba(255,151,30,0.1)',
    '--gold-12': 'rgba(255,151,30,0.12)',
    '--gold-15': 'rgba(255,151,30,0.15)',
    '--gold-20': 'rgba(255,151,30,0.2)',
    '--gold-30': 'rgba(255,151,30,0.3)',
    '--gold-40': 'rgba(255,151,30,0.4)',
    '--gold-50': 'rgba(255,151,30,0.5)',
  },

};

/* ──────────────────────────────────────────────────
 * 主题元信息（用于UI显示）
 * ────────────────────────────────────────────────── */
window.CLAW_THEME_META = {
  'black-gold':      { label: '黑金',   swatchBg: '#0A0A0F', swatchAccent: '#C9A84C' },
  'deep-ocean':      { label: '深海蓝', swatchBg: '#031E36', swatchAccent: '#9ABCE0' },
  'glacier-blue':    { label: '冰川蓝', swatchBg: '#F5F1EC', swatchAccent: '#2E4265' },
  'autumn-dusk':     { label: '秋暮',   swatchBg: '#151D2B', swatchAccent: '#D5B893' },
  'sunset-ember':    { label: '落日余烬', swatchBg: '#1A1814', swatchAccent: '#FF971E' },
};

/* ──────────────────────────────────────────────────
 * 通用主题应用函数（子页面直接调用）
 * ────────────────────────────────────────────────── */
window.CLAW_applyTheme = function(themeName) {
  var themes = window.CLAW_THEMES;
  var theme = themes[themeName] || themes['deep-ocean'];
  var root = document.documentElement;

  // 批量设置 CSS 变量
  Object.keys(theme).forEach(function(key) {
    root.style.setProperty(key, theme[key]);
  });

  root.setAttribute('data-theme', themeName);
  try { localStorage.setItem('claw-theme', themeName); } catch(e) {}
};

/* ──────────────────────────────────────────────────
 * 子页面监听父页面主题广播
 * 只在子 iframe 里生效（顶层主HTML由自己的 themeSwitcher 管理）
 * ────────────────────────────────────────────────── */
(function() {
  var isTopLevel = (window === window.top);

  // 子iframe：监听父页面的主题广播
  if (!isTopLevel) {
    window.addEventListener('message', function(e) {
      if (e.data && e.data.type === 'themeChange') {
        window.CLAW_applyTheme(e.data.theme);
      }
    });
  }

  /* 页面加载时应用已存储的主题（主HTML和子HTML都执行，保持一致） */
  var saved = 'deep-ocean';
  try { saved = localStorage.getItem('claw-theme') || 'deep-ocean'; } catch(e) {}
  window.CLAW_applyTheme(saved);
})();
