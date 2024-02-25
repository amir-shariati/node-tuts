const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const rootPath = require('./utils/path')
const {setStatics} = require('./utils/statics')
const adminRoutes = require('./routes/admin')
const indexRoutes = require('./routes/index')

const app = express()

//Middlewares
app.use(bodyParser.urlencoded({extended: false}))

// EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Statics
setStatics(app)

//Routes
app.use('/admin', adminRoutes)


app.listen(3000, () => {
    console.log('server is running on port 3000')
})