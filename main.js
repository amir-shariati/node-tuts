// const http = require("http")
import http from 'http'
import chalk from 'chalk';
// const logger = require('./logger')
import {name as logger_name, printName} from './logger.js'

const server = http.createServer((req, res)=>{
    console.log(req)
})

server.listen(3000, ()=>{
    console.log(chalk.green("server is running on port 3000"))
    printName(chalk.red("Bar"))
    console.log(chalk.bgWhite(chalk.black(logger_name)))
    }
)