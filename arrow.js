var a = function (n){
    return n;
}
console.log(a('Success'));


// arrow function
let fruit = (f) =>{ return f }
console.log(fruit('Apple'));


let fruit = f => f;
console.log('Mango');


let multiply = m => m*m*m;
console.log(multiply(5));

let mul = (m,n) => m*n;
let mul = (m,n) => { return m*n };
console.log(mul(4,5));