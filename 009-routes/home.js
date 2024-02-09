const path = require('path')
const express = require('express')
const router = express.Router()

const rootDir = require('../utils/path')

router.get('/hello', (req, res) => {
    res.sendFile(path.join(rootDir, '009-views', 'hello.html'))
})

router.get('/', (req, res) => {
    console.log(__dirname)
    console.log(rootDir)
    console.log(path.join(rootDir, '009-views', 'index.html' ))
    res.sendFile(path.join(rootDir, '009-views', 'index.html' ))
})

module.exports = router