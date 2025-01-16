const http = require('http');

const server = http.createServer((req, res) => {
  // Without setting the content-length header, the response might not be sent completely
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});