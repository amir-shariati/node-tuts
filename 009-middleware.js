const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('This middleware runs everytime')
    next()
})

app.use('/hello', (req, res) => {
    res.send('<center><h1>Hello World</h1></center>')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})