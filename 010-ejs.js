const path = require("path")
const express = require('express')

const app = express()

app.set(express.static(path.join(__dirname, '010-public')))