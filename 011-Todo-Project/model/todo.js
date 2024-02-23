const fs = require('fs')
const path = require('path')

const rootDir = require('../utils/path')
const filePath = path.join(rootDir,'011-Todo-Project', 'data', 'todos.json')

class Todo {
    constructor(id, text, completed = false) {
        this.id = id
        this.text = text
        this.completed = completed
    }

    save(callback){
        fs.writeFile(filePath, JSON.stringify(this), (err)=>{
            if(err) callback(err)
            else callback(null)
        })
    }
}

module.exports = Todo