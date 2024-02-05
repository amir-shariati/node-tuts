const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    // const url = req.url
    // const method = req.method
    // const headers = req.headers
    const {url, method, headers} = req
    console.log(`url: ${url} \n method: ${method} \n`)
    console.log('headers: ', headers , '\n')

    res.write('<html>' +
        '<header>' +
        '<title>Hello world</title>' +
        '</header>' +
        '<body>' +
        '<center><h1>Hello World!</h1></center>' +
        '</body>' +
        '<html/>')
    res.end()
})

server.listen(3000, ()=>{
    console.log('server is running on port 3000')
})