import urllib.request
import re

def get_og_image(url):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        html = urllib.request.urlopen(req).read().decode('utf-8')
        match = re.search(r'<meta property="og:image" content="(.*?)"', html)
        if match:
            return match.group(1)
        
        match2 = re.search(r'<meta property="og:image" content=\'(.*?)\'', html)
        if match2:
            return match2.group(1)
            
        match3 = re.search(r'<meta name="twitter:image" content="(.*?)"', html)
        if match3:
            return match3.group(1)
            
        return "Not found"
    except Exception as e:
        return str(e)

print("Daily Finance:", get_og_image('https://play.google.com/store/apps/details?id=com.probeshpath.dailyfinance'))
print("HRM:", get_og_image('https://play.google.com/store/apps/details?id=com.logicsoftbd.hrm'))
print("Smart Track:", get_og_image('https://apps.apple.com/gb/app/platform-approvals/id6759209301'))
