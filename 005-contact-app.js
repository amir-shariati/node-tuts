const fs = require("fs")

const data = [
    {id:1, fullName: "Amir Shariati"},
    {id:2, fullName: "Ali Shariati"},
    {id:3, fullName: "Fati Shariati"},
]

fs.writeFileSync('005-contact.json', JSON.stringify(data))