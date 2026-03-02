// Create a buffer of 10 bytes filled with zeros
//const bufvar = Buffer.alloc(10);
//console.log(bufvar);

// Create an uninitialized buffer of 10 bytes faster then .alloc()
//const buffer2 = Buffer.allocUnsafe(10);
//console.log(buffer2);

// Fill the buffer with zeros for security
//buffer2.fill(1);
//console.log(buffer2);


//Create buffers from existing data.

// Create a buffer from a string
//const buffer3 = Buffer.from('Hello, World!');
//console.log(buffer3);

//console.log(buffer3.toString());

// Create a buffer from an array of integers
const buffer4 = Buffer.from([11, 22, 33, 44, 55]);
console.log(buffer4);

//console.log(buffer4.toString());

// Create a buffer from another buffer
const buffer5 = Buffer.from(buffer4);
console.log(buffer5);
