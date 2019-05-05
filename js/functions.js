// function declaration
/* function functionName(){
    run your code
} */

function greet(){
    console.log('Hello there!');
}
greet();


//function expression
const speak = function greet(){
    console.log('Good day?')
};

speak();
speak();
speak();



// arguments & parameters
const calcArea = function cal(radius){
    let area = 3.14 * radius**2;
    console.log(area);
}

calcArea(5);


// returning values
/* const calcAreaReturned = function cal(radius){
    let area = 3.14 * radius**2;
    return area;
} */

const calcAreaReturned = function cal(radius){
    return 3.14 * radius**2;
}

const area = calcAreaReturned(7);
console.log(area);

