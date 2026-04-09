#!/usr/bin/env python3
"""
将小 HTML 中的硬编码字体大小替换为 v17 字体系统变量
映射规则（基于语义）：
  12px, 13px, 14px, 15px → var(--text-sm)   辅助说明/标签
  16px, 17px, 18px, 19px → var(--text-body)  正文
  20px, 21px             → var(--text-lead)  前言/突出正文
  22px, 23px, 24px, 25px → var(--text-h4)    小组/卡片标题
  26px, 27px, 28px, 30px → var(--text-h3)    模块标题
  31px, 32px, 33px, 34px → var(--text-h2)    栏位标题
  36px+                  → var(--text-h1)    页面主标题
"""
import re
import os

DIR = os.path.dirname(os.path.abspath(__file__))

# 字体大小映射（px值 → CSS变量）
FONT_MAP = {
    12: 'var(--text-sm)',
    13: 'var(--text-sm)',
    14: 'var(--text-sm)',
    15: 'var(--text-sm)',
    16: 'var(--text-body)',
    17: 'var(--text-body)',
    18: 'var(--text-body)',
    19: 'var(--text-body)',
    20: 'var(--text-lead)',
    21: 'var(--text-lead)',
    22: 'var(--text-h4)',
    23: 'var(--text-h4)',
    24: 'var(--text-h4)',
    25: 'var(--text-h4)',
    26: 'var(--text-h3)',
    27: 'var(--text-h3)',
    28: 'var(--text-h3)',
    29: 'var(--text-h3)',
    30: 'var(--text-h3)',
    31: 'var(--text-h2)',
    32: 'var(--text-h2)',
    33: 'var(--text-h2)',
    34: 'var(--text-h2)',
    35: 'var(--text-h2)',
    36: 'var(--text-h1)',
    40: 'var(--text-h1)',
    48: 'var(--text-h1)',
    56: 'var(--text-h1)',
    64: 'var(--text-h1)',
    72: 'var(--text-h1)',
}

# 只处理这些有硬编码字体的文件
HTML_FILES = [
    '02_技术解读_LLM原理_动画版.html',
    '02_技术解读_多智能体协同_动画版_20260401_151600.html',
    '03_广州实践_SOP智能升级_动画版.html',
    '03_广州实践_动态资产配置_动画版.html',
    '03_广州实践_智能客户运营_动画版.html',
    '03_广州实践_跨部门协同_动画版.html',
]

def replace_font_sizes(content):
    """替换 CSS 中的硬编码字体大小"""
    replacements = []
    
    def replace_match(m):
        px_val = int(m.group(1))
        if px_val in FONT_MAP:
            var = FONT_MAP[px_val]
            # 保持原来的格式（有空格或没有）
            original = m.group(0)
            replaced = m.group(0).replace(f'{px_val}px', var)
            if original != replaced:
                replacements.append((original, replaced))
            return replaced
        return m.group(0)
    
    # 匹配 CSS 中的 font-size: NNpx 或 font-size:NNpx
    # 但不替换 font-size 变量定义块本身（v17系统定义里的那些）
    # 通过检查是否在 v17 字体系统定义块中来避免
    
    # 简单策略：替换所有 font-size:NNpx 和 font-size: NNpx
    # v17 字体系统块里用的是 XX.Xpx 格式（带小数点），不会被这个正则匹配到
    result = re.sub(
        r'font-size\s*:\s*(\d+)px',
        replace_match,
        content
    )
    
    return result, replacements

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content, changes = replace_font_sizes(content)
    
    if changes:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'  ✓ 替换了 {len(changes)} 处硬编码字体大小')
        for orig, repl in changes[:5]:
            print(f'    {orig!r} → {repl!r}')
        if len(changes) > 5:
            print(f'    ... 还有 {len(changes)-5} 处')
    else:
        print(f'  → 无硬编码字体需要替换')
    
    return len(changes)

if __name__ == '__main__':
    print('=== 替换硬编码字体大小为 v17 字体系统变量 ===\n')
    total = 0
    for fname in HTML_FILES:
        fpath = os.path.join(DIR, fname)
        if not os.path.exists(fpath):
            print(f'[跳过] {fname} 不存在')
            continue
        print(f'[处理] {fname}')
        total += process_file(fpath)
        print()
    print(f'=== 完成：共替换 {total} 处硬编码字体 ===')
