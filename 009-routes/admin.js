const fs = require('fs')

const express = require('express')
const router = express.Router()

router.post('/msg', (req, res) => {
    console.log(req.body)
    fs.writeFile('007-form-data.txt', req.body.msg, err=>{
        if (err) throw err
        res.redirect('/')
    })
})

module.exports = router