const path = require("path")
const express = require('express')
const bodyParser = require("body-parser");

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, '010-public')))

// set the view engine to ejs
app.set('view engine', 'ejs');

// set the views path
app.set('views', '010-views')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, ()=>{
    console.log('server is running on port 3000')
})