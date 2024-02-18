const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const rootPath = require('./utils/path')
const {setStatics} = require('./utils/statics')

const app = express()

//Middlewares
app.use(bodyParser.urlencoded({extended: false}))

// EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Statics
app.use(express.static(path.join(__dirname, '011-Todo-Project', 'public')))
app.use(express.static(path.join(rootPath, 'node_modules', 'bootstrap-v4-rtl', 'dist')))
app.use(express.static(path.join(rootPath, 'node_modules', 'font-awesome')))

//Routes
app.get('/', (req, res) => {
    res.render('index', {pageTitle: 'کارهای روزمره'})
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})