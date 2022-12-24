const http = require('http')
const fs = require('fs').promises

const server = http
  .createServer(async (req, res) => {
    //... 응답 코드
    try {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=uft-8' })
      const data = await fs.readFile('./server.html')
      res.end(data)
    } catch (error) {
      console.log(error)
      res.writeHead(200, { 'Content-Type': 'text/html; charset=uft-8' })
      res.end(error.message) // 에러 메세지 전송
    }
  })
  .listen(8080)
server.on('listening', () => {
  console.log('8080대기중')
})
server.on('error', (error) => {
  console.log(error)
})
