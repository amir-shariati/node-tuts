const yargs = require("yargs")
const {addContact, listContacts, removeContact} = require('./005-contact')

yargs.commands({
    command: "create",
    aliases: "c",
    describe: "creat new contact",
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

yargs.commands({
    command: "list",
    aliases: "l",
    describe: "list all contacts",
    handler: ()=>{
        listContacts()
    }
})

yargs.commands({
    command: "remove",
    aliases: "r",
    describe: "remove contact",
    builder: {
        fullName: {
            alias: "f",
            describe: "user full name",
            demandOption: true,
            type: "string"
        }
    },
    handler: ({fullName})=>{
        removeContact(fullName)
    }
})

// console.log(yargs.argv)
yargs.parse()