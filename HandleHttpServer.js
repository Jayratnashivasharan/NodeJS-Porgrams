var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
   
       // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
   
    if (req.url == '/') { //check the URL of the current request
        
        
        
        // set response content    
        res.write('<html><body><p><H1>This is Home Page.</H1></p></body></html>');
        res.end();
    
    }
    else if (req.url == "/student") {
        
        
        res.write('<html><body><p><H1>This is Student Page.</H1></p></body></html>');
        res.end();
    
    }
    else if (req.url == "/admin") {
        
        
        res.write('<html><body><p><H1>This is Admin Page.</H1></p></body></html>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(8090); //6 - listen for any incoming requests

console.log('Node.js web server at port 8090 is running..')