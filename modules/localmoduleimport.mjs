
/*
// Import specific named exports
import { sum, multi,pi } from './exportmath.mjs';
sum(100,200);

console.log("PI="+pi);
*/


// Rename imports to avoid naming conflicts

import { sum as calcisum, multi as calcimul,pi } from './exportmath.mjs';
calcisum(100,200);

console.log("PI="+pi);


// Import all named exports as an object

import * as calci from './exportmath.mjs';
calci.sum(100,200);

console.log("PI="+calci.pi);
