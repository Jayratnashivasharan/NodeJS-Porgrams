
// Multiple named exports
export function sum(a,b)
{

    let c=a+b;
    console.log("Addition = "+c);
    //return c;
}

export function multi(a,b)
{

    let c=a*b;
    console.log("Multiplication = "+c);
    //return c;
}

export var pi=3.14;


/*
// Alternative: export list at the end
function sum(a,b)
{

    let c=a+b;
    console.log("Addition = "+c);
    //return c;
}

function multi(a,b)
{

    let c=a*b;
    console.log("Multiplication = "+c);
    //return c;
}

 var pi=3.14;

export {sum, multi, pi };
*/