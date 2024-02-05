const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    const url = req.url
    const method = req.method
    const headers = req.headers
    console.log(`url: ${url} \n method: ${method} \n headers: ${headers} \n`)
})