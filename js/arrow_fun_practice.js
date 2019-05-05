// practise arrow functions

const greet = () => 'hello, world';

let speak = greet();
console.log(speak);


bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([20, 10, 15], 0.75));

const person = function(radius, circle, pi){
    let area = 3.
}
