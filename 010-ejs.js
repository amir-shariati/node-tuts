const path = require("path")
const express = require('express')

const app = express()

app.set(express.static(path.join(__dirname, '010-public')))

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})