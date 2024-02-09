const express = require('express')
const bodyParser = require('body-parser')

const adminRoutes = require('./009-routes/admin')
const homeRoutes = require('./009-routes/home')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(adminRoutes)
app.use(homeRoutes)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})