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
   * ☕ 暖米白 — 羊皮纸质感，古典高雅
   * 品牌色：暗金 #8B6914 → 琥珀 #B8890A
   * 背景：米白 #F5F0E8 → 象牙 #EDE6D6
   * ────────────────────────────────────────────── */
  'warm-parchment': {
    '--bg':             '#F5F0E8',
    '--bg2':            '#EDE6D6',
    '--bg3':            '#E0D5C0',
    '--gold':           '#8B6914',
    '--gold-bright':    '#B8890A',
    '--gold-dim':       'rgba(139,105,20,0.12)',
    '--text':           '#2D2410',
    '--text-dim':       '#7A6840',
    '--border':         'rgba(139,105,20,0.25)',
    '--red':            '#C0392B',
    '--green':          '#27AE60',
    '--sidebar-bg':     '#EDE6D6',
    '--sidebar-text':   '#2D2410',
    '--sidebar-active': 'rgba(139,105,20,0.1)',
        /* 透明度变体（自动计算，随金色变化） */
    '--gold-04': 'rgba(139,105,20,0.04)',
    '--gold-05': 'rgba(139,105,20,0.05)',
    '--gold-08': 'rgba(139,105,20,0.08)',
    '--gold-10': 'rgba(139,105,20,0.1)',
    '--gold-12': 'rgba(139,105,20,0.12)',
    '--gold-15': 'rgba(139,105,20,0.15)',
    '--gold-20': 'rgba(139,105,20,0.2)',
    '--gold-30': 'rgba(139,105,20,0.3)',
    '--gold-40': 'rgba(139,105,20,0.4)',
    '--gold-50': 'rgba(139,105,20,0.5)',
    '--card-bg':        '#EDE6D6',
  },

  /* ──────────────────────────────────────────────
   * 🌲 暗夜森林 — 神秘深邃，科技感强
   * 品牌色：碧玉绿 #7ECBA1 → 薄荷 #A8DFC0
   * 背景：深绿 #0D1F1A
   * ────────────────────────────────────────────── */
  'forest-night': {
    '--bg':             '#0D1F1A',
    '--bg2':            '#142B22',
    '--bg3':            '#1C3A2E',
    '--gold':           '#7ECBA1',
    '--gold-bright':    '#A8DFC0',
    '--gold-dim':       'rgba(126,203,161,0.15)',
    '--text':           '#C8E6D8',
    '--text-dim':       '#6A9E84',
    '--border':         'rgba(126,203,161,0.2)',
    '--red':            '#FF7B6B',
    '--green':          '#4FC08D',
    '--sidebar-bg':     '#0A1814',
    '--sidebar-text':   '#C8E6D8',
    '--sidebar-active': 'rgba(126,203,161,0.15)',
        /* 透明度变体（自动计算，随金色变化） */
    '--gold-04': 'rgba(126,203,161,0.04)',
    '--gold-05': 'rgba(126,203,161,0.05)',
    '--gold-08': 'rgba(126,203,161,0.08)',
    '--gold-10': 'rgba(126,203,161,0.1)',
    '--gold-12': 'rgba(126,203,161,0.12)',
    '--gold-15': 'rgba(126,203,161,0.15)',
    '--gold-20': 'rgba(126,203,161,0.2)',
    '--gold-30': 'rgba(126,203,161,0.3)',
    '--gold-40': 'rgba(126,203,161,0.4)',
    '--gold-50': 'rgba(126,203,161,0.5)',
    '--card-bg':        '#142B22',
  },

  /* ──────────────────────────────────────────────
   * 🌸 暮光玫瑰 — 优雅渐变，柔美科技感
   * 品牌色：玫瑰金 #E8A0B0 → 浅粉 #F0C4CC
   * 背景：深紫灰 #1A0F14 → #2A1520
   * ────────────────────────────────────────────── */
  'dusk-rose': {
    '--bg':             '#1A0F14',
    '--bg2':            '#2A1520',
    '--bg3':            '#3D2030',
    '--gold':           '#E8A0B0',
    '--gold-bright':    '#F0C4CC',
    '--gold-dim':       'rgba(232,160,176,0.15)',
    '--text':           '#F0D8E0',
    '--text-dim':       '#C090A0',
    '--border':         'rgba(232,160,176,0.2)',
    '--red':            '#FF6B8A',
    '--green':          '#6ECFA4',
    '--sidebar-bg':     '#120A0F',
    '--sidebar-text':   '#F0D8E0',
    '--sidebar-active': 'rgba(232,160,176,0.12)',
        /* 透明度变体（自动计算，随金色变化） */
    '--gold-04': 'rgba(232,160,176,0.04)',
    '--gold-05': 'rgba(232,160,176,0.05)',
    '--gold-08': 'rgba(232,160,176,0.08)',
    '--gold-10': 'rgba(232,160,176,0.1)',
    '--gold-12': 'rgba(232,160,176,0.12)',
    '--gold-15': 'rgba(232,160,176,0.15)',
    '--gold-20': 'rgba(232,160,176,0.2)',
    '--gold-30': 'rgba(232,160,176,0.3)',
    '--gold-40': 'rgba(232,160,176,0.4)',
    '--gold-50': 'rgba(232,160,176,0.5)',
    '--card-bg':        '#2A1520',
  },

  /* ──────────────────────────────────────────────
   * 🔮 星云紫 — 神秘宇宙感，科幻氛围
   * 品牌色：星光紫 #A78BFA → 薰衣草 #C4B5FD
   * 背景：深宇宙蓝紫 #0C0A1A → #16103A
   * ────────────────────────────────────────────── */
  'nebula-purple': {
    '--bg':             '#0C0A1A',
    '--bg2':            '#16103A',
    '--bg3':            '#241858',
    '--gold':           '#A78BFA',
    '--gold-bright':    '#C4B5FD',
    '--gold-dim':       'rgba(167,139,250,0.15)',
    '--text':           '#E8E0FF',
    '--text-dim':       '#9D8FD0',
    '--border':         'rgba(167,139,250,0.2)',
    '--red':            '#F87171',
    '--green':          '#34D399',
    '--sidebar-bg':     '#080618',
    '--sidebar-text':   '#E8E0FF',
    '--sidebar-active': 'rgba(167,139,250,0.12)',
        /* 透明度变体（自动计算，随金色变化） */
    '--gold-04': 'rgba(167,139,250,0.04)',
    '--gold-05': 'rgba(167,139,250,0.05)',
    '--gold-08': 'rgba(167,139,250,0.08)',
    '--gold-10': 'rgba(167,139,250,0.1)',
    '--gold-12': 'rgba(167,139,250,0.12)',
    '--gold-15': 'rgba(167,139,250,0.15)',
    '--gold-20': 'rgba(167,139,250,0.2)',
    '--gold-30': 'rgba(167,139,250,0.3)',
    '--gold-40': 'rgba(167,139,250,0.4)',
    '--gold-50': 'rgba(167,139,250,0.5)',
    '--card-bg':        '#16103A',
  },

};

/* ──────────────────────────────────────────────────
 * 主题元信息（用于UI显示）
 * ────────────────────────────────────────────────── */
window.CLAW_THEME_META = {
  'black-gold':      { label: '黑金',   swatchBg: '#0A0A0F', swatchAccent: '#C9A84C' },
  'deep-ocean':      { label: '深海蓝', swatchBg: '#031E36', swatchAccent: '#9ABCE0' },
  'warm-parchment':  { label: '暖米白', swatchBg: '#F5F0E8', swatchAccent: '#8B6914' },
  'forest-night':    { label: '暗夜绿', swatchBg: '#0D1F1A', swatchAccent: '#7ECBA1' },
  'dusk-rose':       { label: '暮光玫瑰', swatchBg: '#1A0F14', swatchAccent: '#E8A0B0' },
  'nebula-purple':   { label: '星云紫', swatchBg: '#0C0A1A', swatchAccent: '#A78BFA' },
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
