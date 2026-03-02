//Writing to Buffers

// Create an empty buffer
const buffer = Buffer.alloc(16);

// Write a string to the buffer
buffer.write('Node.js is Best!');
console.log(buffer);

console.log(buffer.toString());

// Write bytes at specific positions
buffer[5] = 44; // ASCII for ','
buffer[6] = 32; // ASCII for space
console.log(buffer.toString());

buffer.write('Node', 7);
console.log(buffer.toString());
