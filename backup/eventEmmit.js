const EventEmitter = require('events')
const event = new EventEmitter()
// function  sayHello(name, age){
//     console.log(`Hello my name is ${name} and I am ${age} year old.`)
// }

// sayHello('Karan', 30)


// event.on('sayHello', (name, age) =>{
//     console.log(`Hello my name is ${name} and I am ${age} years old`)
// })

// event.emit('sayHello', 'Karan', 30);


event.once('sayHello', (name, age)=>{
    console.log(`Hello my name is ${name} and i am ${age} year old.`)
})



event.emit('sayHello', 'karan', 30)
