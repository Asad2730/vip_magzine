var http = require('http');
var fs = require('fs');


fs.readFile('./login.html', (err, html) => {
    if (err) {
        throw err;
    }


    http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    }).listen(3000, () => {
        console.log('Server running at http://localhost:3000/');
    });
});
