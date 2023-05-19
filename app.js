const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

server.listen(3000, '192.168.3.71', () =>{
    console.log('Server running at http://192.168.3.71:3000/');
})