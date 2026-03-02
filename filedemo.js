//Create and Read File

var fs = require('fs');
/*
//syncronus read
console.log('1. Starting sync read...');
const data = fs.readFileSync('D://Dinesh//Adv Web Tech//Nodejsp//myfile.txt', 'utf8');
console.log('2. File contents:', data);
console.log('3. Done reading file');

*/

/*
//asyncronus read
console.log('1. Starting async read...');
fs.readFile('D://Dinesh//Adv Web Tech//Nodejsp//myfile.txt', function (err, data)
 {
    if (err) 
        throw err;

    console.log('2. File contents:', data.toString());
   
});
console.log('3. Done read operation');


*/

var data ="I want to choose my track as Full Stack Developer";

//console.log("Writing synchronously");
//fs.writeFileSync("D://Dinesh//Adv Web Tech//Nodejsp//input.txt", data);
//console.log("Writing synchronously Done");

console.log("1. Writing asynchronously");
fs.writeFile("D://Dinesh//Adv Web Tech//Nodejsp//input.txt", data, function (err) { 

   if (err)
      console.log(err);
   else
      console.log('2. Write operation complete.');
});
console.log("3. Writing asynchronously Done!");
