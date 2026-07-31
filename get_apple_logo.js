const https = require('https');

https.get('https://itunes.apple.com/lookup?id=6759209301', (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
        try {
            const json = JSON.parse(data);
            if (json.results && json.results.length > 0) {
                console.log(json.results[0].artworkUrl512);
            } else {
                console.log("No results");
            }
        } catch(e) {
            console.log(e);
        }
    });
});
