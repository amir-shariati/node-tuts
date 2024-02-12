const process = require("process")

// console.log(process.env)
// console.log(process.cwd())
// console.log(process.pid)
// console.log(process.platform)
// console.log(process.config)
// console.log(process.argv)
process.on("start", (e)=>{
    console.log("callback for start process event")})
process.on("beforeExit", e=>{
    console.log("callback for beforeExit process event")})
console.log('start app')