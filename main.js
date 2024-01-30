const http = require("http")
const logger = require('./logger')

const server = http.createServer((req, res)=>{
    console.log(req)
})

server.listen(3000, ()=>{
    console.log("server is running on port 3000")
    logger.printName("Bar")
    console.log(logger.pName)
    }
)