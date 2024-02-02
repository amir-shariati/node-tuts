const fs = require("fs")
const {type} = require("os");
const {json} = require("stream/consumers");

const data = [
    {id:1, fullName: "Amir Shariati"},
    {id:2, fullName: "Ali Shariati"},
    {id:3, fullName: "Fati Shariati"},
]

fs.writeFileSync('005-contact.json', JSON.stringify(data))

const read_data = fs.readFileSync('005-contact.json')
const data_obj = JSON.parse(read_data.toString())
console.log(read_data.toString())
console.log(data_obj[0]?.fullName)
console.log(typeof read_data)