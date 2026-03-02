//Reading from Buffers

// Create a buffer from a string
const buffer1 = Buffer.from('Hello, Node.js!');

// Read the entire buffer as a string
console.log(buffer1.toString());

// Read a portion of the buffer (start at position 7, end before position 11)
console.log(buffer1.toString('utf8', 7, 11));

// Read a single byte
console.log(buffer1[0]);

// Convert the ASCII code to a character
console.log(String.fromCharCode(buffer1[0]));


//Iterating Through Buffers

// Create a buffer from a string
const buffer2 = Buffer.from('Hello');

// Iterate using for...of loop
for (const byte of buffer2) {
console.log(byte);
}

// Iterate using forEach
buffer2.forEach((byte, index) => {
  console.log(`Byte at position ${index}: ${byte}`);
});