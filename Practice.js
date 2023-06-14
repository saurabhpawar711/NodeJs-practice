// const fs = require('fs')
// fs.writeFileSync('text.txt', 'Hello World');

// let productOfTwoNums = (a,b) => a*b

// console.log(productOfTwoNums(2,3));


// const student = {
//     name : 'saurabh',
//     age : 22,
//     greet : function() {
//         console.log('Hello from', this.name)
//     } 
// }

// student.greet()

// const fruits = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

// const addElement = 'empty string'

// for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] === ' ') {
//         fruits[i] = addElement;
//     }
// }
// console.log(fruits)
// console.log('a');

// console.log('b');

// function printc() {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res(console.log('c')), 3000})
//     })
// }

// function printd() {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res(console.log('d')), 0})
//     })
// }
//  function printe() {
//     console.log('e');
//  }

// async function print() {
//     await printc();
//     await printd();
//     printe();
// }

// print();

const http = require('http')
const requestHandler = require('./routes')
const app = http.createServer(requestHandler)
// console.log(routes.text);
app.listen(4000)