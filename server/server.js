const http = require('http')

const PORT = 8000

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('响应内容');
})

server.listen(PORT)