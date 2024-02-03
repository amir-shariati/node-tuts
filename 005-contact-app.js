const yargs = require("yargs")
const {addContact, listContacts} = require('./005-contact')

yargs.commands({
    command: "create",
    describe: "creat new user",
    builder: {
        fullName: {
            alias: "f",
            describe: "user full name",
            demandOption: true,
            type: "string"
        },
        phone:{
            alias: "p",
            describe: "user phone number",
            demandOption: true,
            type: "number"
        },
        email:{
            alias: "e",
            describe: "user email",
            demandOption: true,
            type: "string"
        },
    },
    handler: ({fullName, phone, email} )=>{
        addContact(fullName, phone, email)
    }
})

// console.log(yargs.argv)
yargs.parse()