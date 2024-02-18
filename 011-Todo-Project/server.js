const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//Middlewares
app.use(bodyParser.urlencoded({extended: false}))

// EJS
app.set('view engin', 'ejs')
app.set('views', 'views')

//Routes
app.listen(3000, () => {
    console.log('server is running on port 3000')
})