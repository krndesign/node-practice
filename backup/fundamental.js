// var, let and const

// var name = 'Jonathan';
// name = 'John';
// console.log(name);

// let name = 'Jonathan';
// name = 'John';
// console.log(name);

// const name = 'Jonathan';
// name = 'John'; // This will throw an error because 'name' is a constant
// console.log(name);


// functons
// function greet() {
//     var name = 'John';
//     console.log('Hello ' + name);
// }

// // console.log(name); // This will throw an error because 'name' is not defined in this scope
// greet(); // This will print 'Hello John' to the console

// arrow
// const greet = (name) => `Hello ${name}`;

// console.log(greet('Karan')); // This will print 'Hello John' to the console

// consitions

// var age = 72;

// if(age < 18){
//     console.log(`you are a minor`);
// }else if(age >= 18 && age < 65){
//     console.log(`you are an adult`);
// }else{
//     console.log(`you are a senior citizen`);
// }

// loops

// for(let i = 1; i <= 5; i++){
//     console.log(`Number  : ${i}`);
// }

// var i = 1;

// while(i <= 5){
//     console.log(`while number : ${i}`);
//     i++;
// }

// Array

// let fruits = ['Apple', 'Banana', 'Cherry'];

// console.log(fruits[0]); // This will print 'Apple' to the console
// fruits.push('Orange'); // This will add 'Orange' to the end of the array
// console.log(fruits); // This will print ['Apple', 'Banana', 'Cherry', 'Orange'] to the console
// fruits.pop(); // This will remove the last element from the array
// console.log(fruits); // This will print ['Apple', 'Banana', 'Cherry'] to the console
// fruits.unshift('Mango'); // This will add 'Mango' to the beginning of the array
// console.log(fruits);
// fruits.shift(); // This will remove the first element from the array
// console.log(fruits); // This will print ['Banana', 'Cherry', 'Orange'] to the console
// fruits.splice(1, 2); // This will remove 1 element at index 1 (which is 'Banana')
// console.log(fruits); // This will print ['Apple', 'Cherry', 'Orange'] to the console

// objects

let person = {
    name : 'John',
    age : 30,
    greet : function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} Years old.`)
    }
}

console.log(person.name)
person.greet(); // This will print 'Hello, my name is John and I am 30 Years old.' to the consoles