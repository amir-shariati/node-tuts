const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    const {url, method, headers} = req

    if(url === '/hello'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>' +
            '<header>' +
            '<title>Hello world</title>' +
            '</header>' +
            '<body>' +
            '<center><h1>Hello World!</h1></center>' +
            '</body>' +
            '<html/>')
        return res.end()
    }
    else if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write(
            '<header>' +
            '<title>Hello world</title>' +
            '</header>'
        )
        res.write(
            '<body>' +
            '<center>' +
            '<h1>Home Page</h1>' +
            '<form action="/msg" method="POST"> <input type="text" name="msg"/> <input type="submit"></form>' +
            '</center>' +
            '</body>')
        res.write('<html/>')
        return res.end()
    }
    else if (url === '/msg' && method === 'POST'){
        res.writeHead(302, {Location: '/'})
        return res.end()
    }

})

server.listen(3000, ()=>{
    console.log('server is running on port 3000')
})