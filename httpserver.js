// 1 - Import Node.js core module
var http = require('http'); 

// 2 - creating server
var server = http.createServer(function (req, res) {   
    //handle incomming requests here..
    // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        res.end('<H1>Welcome to My Page!</H1>');

});

//3 - listen for any incoming requests
server.listen(8090); 

console.log('Node.js web server at port 8090 is running..')
