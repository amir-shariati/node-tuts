const path = require('path')

const express = require('express')

const rootPath = require('./path')

module.exports.setStatics = (app) =>{
    app.use(express.static(path.join(rootPath, '011-Todo-Project', 'public')))
    app.use(express.static(path.join(rootPath, 'node_modules', 'bootstrap-v4-rtl', 'dist')))
    app.use(express.static(path.join(rootPath, 'node_modules', 'font-awesome')))
}
