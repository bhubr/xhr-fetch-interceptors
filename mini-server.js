// Straight from https://nodejs.org/en/about
// Will provide server to which we can send XHR requests
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3060;

const server = createServer((req, res) => {
  res.statusCode = 200;
  // Set headers to allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  res.setHeader('Content-Type', 'application/json');
  const responseBody = JSON.stringify({ message: 'Hello World', timestamp: Date.now() });
  res.end(responseBody);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
