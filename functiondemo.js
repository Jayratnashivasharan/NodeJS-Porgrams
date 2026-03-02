/*function sum(a=100,b=200)
{

    let c=a+b;
    //console.log("Addition = "+c);
    return c;
}

let ans=sum();
console.log("Addition = "+ans);
*/

/*
//Anonymous Function

const sum=function(a,b)
{

    let c=a+b;
    console.log("Addition = "+c);
    //return c;
}

sum(100,200);
//console.log(sum(100,200));

*/

//Arrow Function (ES6)
/*function square(x)
{
    return x*x;
}*/
const square = n => n * n;
const addi=(a,b) => a+b;
//console.log(square(4));
console.log(addi(100,200));
