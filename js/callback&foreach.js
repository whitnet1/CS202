// callbacks & forEach
const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
}

myFunc(function (value){
    //do something
    console.log(value);
});

/* let people = ['a', 'b', 'c', 'd'];

people.forEach((person) => {
    console.log(person);
}); */

const logPerson = (person) =>{
    console.log(person);
}

people.forEac