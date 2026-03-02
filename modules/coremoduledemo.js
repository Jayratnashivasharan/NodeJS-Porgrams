/*const os = require('os');

console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Free memory (bytes):', os.freemem());
*/

//Example: HTTP Server
const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);
