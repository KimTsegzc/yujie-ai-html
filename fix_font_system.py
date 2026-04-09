#!/usr/bin/env python3
"""
修复所有小 HTML 中的字体系统冲突问题
问题：旧的 v6 :root 块覆盖了 v17 字体系统的 --current-* 变量
方案：删除旧的 v6 :root 块及其三个 html[data-font-level] 覆盖块
     保留 v17 字体系统（第一个注入的块）
"""

import re
import os
import glob

DIR = os.path.dirname(os.path.abspath(__file__))

# 要处理的小 HTML 文件（排除主文件）
HTML_FILES = [
    '02_技术解读_LLM原理_动画版.html',
    '02_技术解读_多智能体协同_动画版_20260401_151600.html',
    '03_广州实践_SOP智能升级_动画版.html',
    '03_广州实践_动态资产配置_动画版.html',
    '03_广州实践_智能客户运营_动画版.html',
    '03_广州实践_智能情报报_动画版.html',
    '03_广州实践_跨部门协同_动画版.html',
    '03_广州实践_邮件自动处理_动画版.html',
    '03_广州实践_长尾客户连接增长_动画版.html',
    '05_AI友好型银行_时光倒流_动画版.html',
    'p2a-1_智能体是什么_过渡页_v3.html',
]

# v17 字体系统替换块——这是正确的版本，需要确保每个文件里有且只有这一套
V17_FONT_SYSTEM = '''  /* ===== v17 等比缩放字体系统（Type Scale）===== */
  :root {
    /* 行高配合 */
    --leading-tight: 1.15;
    --leading-normal: 1.5;
    --leading-relaxed: 1.6;
    
    /* 基础7档字体变量 - 默认中号方案 (1.250) */
    --text-h1:   48.8px;
    --text-h2:   39.1px;
    --text-h3:   31.3px;
    --text-h4:   25.0px;
    --text-lead: 20.0px;
    --text-body: 16.0px;
    --text-sm:   12.8px;
    
    /* 12档兼容层映射 */
    --font-xs:   var(--text-sm);
    --font-sm:   var(--text-sm);
    --font-base: var(--text-body);
    --font-md:   var(--text-body);
    --font-lg:   var(--text-h4);
    --font-xl:   var(--text-h3);
    --font-2xl:  var(--text-h2);
    --font-2xl2: var(--text-h2);
    --font-3xl:  var(--text-h1);
    --font-3xl2: var(--text-h1);
    --font-4xl:  var(--text-h1);
    --font-hero: var(--text-h1);
    
    /* 当前选中档次（默认中号） */
    --current-xs:   var(--text-sm);
    --current-sm:   var(--text-sm);
    --current-base: var(--text-body);
    --current-md:   var(--text-body);
    --current-lg:   var(--text-h4);
    --current-xl:   var(--text-h3);
    --current-2xl:  var(--text-h2);
    --current-2xl2: var(--text-h2);
    --current-3xl:  var(--text-h1);
    --current-3xl2: var(--text-h1);
    --current-4xl:  var(--text-h1);
    --current-hero: var(--text-h1);
  }
  
  /* 小号方案 (1.200 Minor Third) */
  html[data-font-level="small"] {
    --text-h1: 39.8px; --text-h2: 33.2px; --text-h3: 27.6px; --text-h4: 23.0px;
    --text-lead: 19.2px; --text-body: 16.0px; --text-sm: 13.3px;
  }
  /* 中号方案 (1.250 Major Third) - 默认 */
  html[data-font-level="medium"] {
    --text-h1: 48.8px; --text-h2: 39.1px; --text-h3: 31.3px; --text-h4: 25.0px;
    --text-lead: 20.0px; --text-body: 16.0px; --text-sm: 12.8px;
  }
  /* 大号方案 (1.333 Perfect Fourth) */
  html[data-font-level="large"] {
    --text-h1: 75.9px; --text-h2: 56.9px; --text-h3: 42.7px; --text-h4: 32.0px;
    --text-lead: 24.0px; --text-body: 18.0px; --text-sm: 13.5px;
  }'''

# 匹配旧 v6 字体块的正则（从 /* ===== v6三档 到对应的三个 html[data-font-level] 块结束）
# 特征：
# 1. 注释 /* ===== v6三档字号体系 ===== */  
# 2. :root { --font-xs: 14px; ... }
# 3. 三个 html[data-font-level="small/medium/large"] { ... }
OLD_V6_PATTERN = re.compile(
    r'/\*\s*=+\s*v6三档字号体系\s*=+\s*\*/\s*'
    r':root\s*\{[^}]*--font-xs:\s*14px[^}]*\}\s*'
    r'html\[data-font-level="small"\]\s*\{[^}]*\}\s*'
    r'html\[data-font-level="medium"\]\s*\{[^}]*\}\s*'
    r'html\[data-font-level="large"\]\s*\{[^}]*\}',
    re.DOTALL
)

# 还要处理不含 v6 注释但有旧格式覆盖的情况（部分文件可能不同）
# 特征：直接的 :root { --font-xs: 14px ... } 后面跟三个 data-font-level 块
OLD_ROOT_PATTERN = re.compile(
    r':root\s*\{\s*(?:/\*[^*]*\*/\s*)?'
    r'--font-xs:\s*14px[^}]*\}\s*'
    r'html\[data-font-level="small"\]\s*\{[^}]*\}\s*'
    r'html\[data-font-level="medium"\]\s*\{[^}]*\}\s*'
    r'html\[data-font-level="large"\]\s*\{[^}]*\}',
    re.DOTALL
)

# 也要删除独立的旧 :root { --current-xs: var(--font-xs-m) ... } 块（v5/v6格式）
OLD_CURRENT_VARS_PATTERN = re.compile(
    r':root\s*\{\s*(?:/\*[^*]*小号档次[^*]*\*/\s*)?'
    r'--font-xs:\s*14px[^}]*\}',
    re.DOTALL
)

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # 策略：找到并删除旧的 v6 字体块
    # 旧格式特征：/* ===== v6三档字号体系 ===== */
    #             :root { --font-xs: 14px; ... }
    #             html[data-font-level="small"] { ... }
    #             html[data-font-level="medium"] { ... }  
    #             html[data-font-level="large"] { ... }
    
    # 用更精确的手动定位方式
    # 找"v6三档"注释的位置
    v6_comment_start = content.find('/* ===== v6三档字号体系 =====')
    if v6_comment_start == -1:
        v6_comment_start = content.find('/* ===== v6三档')
    
    if v6_comment_start != -1:
        # 找这块内容的结束：最后一个 html[data-font-level="large"] 块的 }
        # 从 v6_comment_start 开始往后找第四个 } 关闭块（:root + 3个html[]）
        search_from = v6_comment_start
        brace_count = 0
        block_count = 0
        i = search_from
        in_block = False
        end_pos = -1
        
        while i < len(content):
            if content[i] == '{':
                brace_count += 1
                in_block = True
            elif content[i] == '}':
                brace_count -= 1
                if brace_count == 0 and in_block:
                    block_count += 1
                    if block_count == 4:  # :root + 3个 html[]
                        end_pos = i + 1
                        break
            i += 1
        
        if end_pos != -1:
            # 删除这整块（包括前后可能的空白行）
            before = content[:v6_comment_start]
            after = content[end_pos:]
            content = before.rstrip() + '\n' + after.lstrip('\n')
            print(f'  ✓ 删除了旧 v6 字体块（位置 {v6_comment_start}-{end_pos}）')
    else:
        # 没有 v6 注释，检查是否有独立的旧 :root 字体块（含 --font-xs: 14px）
        # 这种情况也需要处理
        old_root_idx = content.find('--font-xs: 14px')
        if old_root_idx != -1:
            # 找到所在的 :root { 块起点
            root_start = content.rfind(':root', 0, old_root_idx)
            if root_start != -1:
                # 找对应的结束 }
                depth = 0
                i = root_start
                while i < len(content):
                    if content[i] == '{': depth += 1
                    elif content[i] == '}':
                        depth -= 1
                        if depth == 0:
                            # 这是这个 :root 块的结束
                            # 继续看后面是否有三个 html[data-font-level] 块
                            end_pos = i + 1
                            break
                    i += 1
                # 再看后面是否紧跟 html[data-font-level] 块
                remaining = content[end_pos:]
                html_blocks = 0
                j = 0
                while j < len(remaining) and html_blocks < 3:
                    stripped = remaining[j:].lstrip()
                    if stripped.startswith('html[data-font-level='):
                        # 找这个块的结束
                        brace_d = 0
                        k = len(remaining) - len(stripped)
                        m = k + j
                        while m < len(remaining):
                            if remaining[m] == '{': brace_d += 1
                            elif remaining[m] == '}':
                                brace_d -= 1
                                if brace_d == 0:
                                    end_pos_new = end_pos + m + 1
                                    j = m + 1
                                    html_blocks += 1
                                    break
                            m += 1
                    else:
                        break
                
                if html_blocks > 0:
                    content = content[:root_start].rstrip() + '\n' + content[end_pos_new:].lstrip('\n')
                    print(f'  ✓ 删除了旧字体 :root 块（含 {html_blocks} 个 html[] 块）')
        else:
            print(f'  → 未发现旧 v6 字体块，跳过')
            return False
    
    # 确认 v17 字体系统已存在（通常在第一个 <style> 块注入）
    if '/* ===== v17 等比缩放字体系统' not in content:
        print(f'  ⚠️  v17 字体系统不存在，需要手动检查！')
    else:
        print(f'  ✓ v17 字体系统已存在')
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'  ✓ 文件已保存')
        return True
    else:
        print(f'  → 内容未变化')
        return False

if __name__ == '__main__':
    print('=== 修复字体系统冲突 ===\n')
    fixed = 0
    for fname in HTML_FILES:
        fpath = os.path.join(DIR, fname)
        if not os.path.exists(fpath):
            print(f'[跳过] {fname} 不存在')
            continue
        print(f'[处理] {fname}')
        if fix_file(fpath):
            fixed += 1
        print()
    print(f'=== 完成：共修复 {fixed} 个文件 ===')
