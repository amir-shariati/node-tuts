const path = require("path");

const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const homeRoutes = require('./routes/home')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(homeRoutes)

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})