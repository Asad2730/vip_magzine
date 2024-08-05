var http = require('http');
var fs = require('fs');
var path = require('path');

// Function to serve HTML files
function serveFile(res, filePath) {
    fs.readFile(filePath, (err, html) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Server Error');
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    });
}

http.createServer((req, res) => {
    switch (req.url) {
        case '/signup':
            serveFile(res, path.join(__dirname, 'signup.html'));
            break;
        case '/forgetPassword':
            serveFile(res, path.join(__dirname, 'forgetPassword.html'));
            break;
        default:
            serveFile(res, path.join(__dirname, 'login.html'));
            break;
    }
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
