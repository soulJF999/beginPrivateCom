// const http = require('http')
// const Koa = require('koa')
// const handleTest = require('./src/router/testApi');
// const logger = require('./config/lib/logger');
//
// const app = new Koa()
//
// const PORT = 8000
//
// const server = http.createServer((req, res) => {
//   const testData = handleTest(req, res)
//   logger.info('testData', testData)
//   if (testData) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(testData);
//   } else {
//     res.writeHead(500, { 'Content-Type': 'text/plain' });
//     res.end('出错啦')
//   }
// })
//
// server.listen(PORT)
const app = require('./config/lib/app')
app.start()
