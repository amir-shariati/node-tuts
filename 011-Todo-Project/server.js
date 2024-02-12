const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//Middlewares
app.use(bodyParser.urlencoded({extended: false}))

//Routes
app.listen(3000, () => {
    console.log('server is running on port 3000')
})