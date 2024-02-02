const os = require('os')
const fs = require('fs')

console.log(os.platform())
console.log(os.userInfo())

fs.writeFile('test-write-file.txt', 'Hello world! \n', (e)=>{
    if (e){
        throw e
    }
    console.log('write file is completed')
})