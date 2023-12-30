const request = require('request');
const fs = require('fs');

function callGenerateClient(baseGenUrl , specURL, type, lang, savePath) {
    return new Promise((resolve, reject) => {
        var options = {
            'method': 'POST',
            'url': `${baseGenUrl}/api/generate`,
            'headers': {
                'authority': 'generator3.swagger.io',
                'accept': 'application/octet-stream, application/json',
                'accept-language': 'en-US,en;q=0.9,ar-US;q=0.8,ar;q=0.7',
                'cache-control': 'no-cache',
                'content-type': 'application/json',
                'origin': 'http://localhost',
                'pragma': 'no-cache',
                'referer': 'http://localhost/',
                'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'sec-fetch-dest': 'empty',
                'sec-fetch-mode': 'cors',
                'sec-fetch-site': 'cross-site',
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            },
            body: JSON.stringify({
                "specURL": specURL,
                "type": type,
                "lang": lang
            })
        };

        // Make the request
        request(options)
            .on('response', function (response) {
                if (response.statusCode !== 200) {
                    reject(new Error('Failed to download file: Status Code ' + response.statusCode));
                    return;
                }

                // Create a write stream
                const fileStream = fs.createWriteStream(savePath);
                response.pipe(fileStream);

                fileStream.on('finish', function () {
                    resolve();
                });
            })
            .on('error', function (err) {
                reject(err);
            });
    });
}

module.exports = callGenerateClient;

