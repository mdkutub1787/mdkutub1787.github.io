const https = require('https');

function fetchOgImage(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                const match = data.match(/<meta\s+property="og:image"\s+content="([^"]+)"/);
                if (match) resolve(match[1]);
                else resolve('Not found');
            });
        }).on('error', reject);
    });
}

async function run() {
    console.log("Daily Finance:", await fetchOgImage('https://play.google.com/store/apps/details?id=com.probeshpath.dailyfinance'));
    console.log("HRM:", await fetchOgImage('https://play.google.com/store/apps/details?id=com.logicsoftbd.hrm'));
    console.log("Smart Track:", await fetchOgImage('https://apps.apple.com/gb/app/platform-approvals/id6759209301'));
}

run();
