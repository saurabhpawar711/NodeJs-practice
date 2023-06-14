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
const app = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;
    const fs = require('fs')
    const path = require('path')


    //     if(url === '/'){
    //         res.end('<h1>Welccome to home page</h1>')
    //     }
    //     else if(url === '/node'){
    //         res.end('<h1>Welcome to my Node Js project</h1>')
    //     }
    //     else if(url === '/about')
    //     {
    //         res.end('<h1>Welcome to about Us page</h1>')
    //     }

    // })

    if (url === '/') {
        fs.readFile(path.join(__dirname, 'message.txt'), (err, response) => {
            if (err) {
                throw err;
            }
            const msg = Buffer.from(response).toString();
            res.write('<html>')
            res.write('<head><title>Node JS</title></head>')
            res.write('<body>' + msg + '</body>')
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
            res.write('</html>')
            return res.end();
        })
    }
    else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            var message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message)
        })

        res.statusCode = 302;
        res.setHeader('location', '/');
        return res.end();
    } else {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Node JS</title></head>')
        res.write('<body><h1>Welcome to Node JS</h1></body>')
        res.write('</html>')
        res.end();
    }
})

app.listen(4000)