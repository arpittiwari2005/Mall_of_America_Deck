import re

with open('/Users/tiwari/Documents/INTER/index.html', 'r') as f:
    html = f.read()

# Extract all <style> blocks
styles = re.findall(r'<style>(.*?)</style>', html, re.DOTALL)
css_content = "\n".join(styles)

first_style_replaced = False
def replace_style(match):
    global first_style_replaced
    if not first_style_replaced:
        first_style_replaced = True
        return '<link rel="stylesheet" href="style.css">'
    return ''

html = re.sub(r'<style>.*?</style>', replace_style, html, flags=re.DOTALL)


# Extract all <script> blocks
scripts = re.findall(r'<script>(.*?)</script>', html, re.DOTALL)
js_content = "\n".join(scripts)

first_script_replaced = False
def replace_script(match):
    global first_script_replaced
    # Keep the <script src="..."> but we don't have any right now. We just replace inline ones.
    # Place the script tag right before </body>
    return ''

html = re.sub(r'<script>.*?</script>', '', html, flags=re.DOTALL)
html = html.replace('</body>', '<script src="script.js"></script>\n</body>')

with open('/Users/tiwari/Documents/INTER/style.css', 'w') as f:
    f.write(css_content.strip())

with open('/Users/tiwari/Documents/INTER/script.js', 'w') as f:
    f.write(js_content.strip())

with open('/Users/tiwari/Documents/INTER/index.html', 'w') as f:
    f.write(html)

print("Split completed successfully!")
