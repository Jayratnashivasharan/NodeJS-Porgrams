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

//module.exports.add=sum;

module.exports = {sum, multi};