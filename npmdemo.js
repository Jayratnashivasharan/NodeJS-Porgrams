//Download a Package

//to download a package called "upper-case":

//npm install upper-case
//NPM creates a folder named "node_modules", where the package will be placed
//Ex. C:\Users\My Name\node_modules\upper-case

//Example 1
let uc = require('C://Users//Home//node_modules//upper-case');
console.log(uc.upperCase("Zeal Pune"));

/*
Example 2
let http = require('http');
let uc = require('C://Users//Home//node_modules//upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Welcome to zeal pune!"));
  res.end();
}).listen(8080);
*/