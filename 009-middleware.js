const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('First middleware')
    next()
})

app.use((req, res, next) => {
    console.log('Second middleware')
    res.send('Hello world')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})