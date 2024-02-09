const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/hello', (req, res) => {
    res.send('<center><h1>Hello World</h1></center>')
})

router.get('/', (req, res) => {
    res.send('<center><form action="admin/msg" method="post"><input type="text" name="msg"><input type="submit"></form></center>')
})

module.exports = router