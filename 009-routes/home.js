const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/hello', (req, res) => {
    res.send('<center><h1>Hello World</h1></center>')
})

router.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname,'..', '009-views', 'index.html' ))
})

module.exports = router