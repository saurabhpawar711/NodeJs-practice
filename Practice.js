// const fs = require('fs')
// fs.writeFileSync('text.txt', 'Hello World');

let productOfTwoNums = (a,b) => a*b

console.log(productOfTwoNums(2,3));


const student = {
    name : 'saurabh',
    age : 22,
    greet : function() {
        console.log('Hello from', this.name)
    } 
}

student.greet()