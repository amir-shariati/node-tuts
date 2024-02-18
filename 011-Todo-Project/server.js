const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//Middlewares
app.use(bodyParser.urlencoded({extended: false}))

// EJS
app.set('view engin', 'ejs')
app.set('views', 'views')

// Statics
app.use(express.static(path.join(__dirname, '011-Todo-Project', 'public')))

//Routes
app.listen(3000, () => {
    console.log('server is running on port 3000')
})