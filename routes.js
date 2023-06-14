const fs = require('fs')
const path = require('path')

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
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
}

module.exports = requestHandler

// module.exports = {
//     handler : requestHandler,
//     text : 'Some text'
// }

// module.exports.handler = requestHandler;

// exports.handler = requestHandler;
