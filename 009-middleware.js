const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/hello', (req, res) => {
    res.send('<center><h1>Hello World</h1></center>')
})

app.post('/msg', (req, res) => {
    console.log(req.body)
    fs.writeFile('007-form-data.txt', req.body.msg, err=>{
        if (err) throw err
        res.redirect('/')
    })
})

app.get('/', (req, res) => {
    res.send('<center><form action="/msg" method="post"><input type="text" name="msg"><input type="submit"></form></center>')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})