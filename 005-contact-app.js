const yargs = require("yargs")

yargs.commands({
    command: "create",
    describe: "creat new user",
    builder: {
        fullname: {
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
    handler: (fullName, phone, email )=>{
        console.log('contact is added')
    }
})

console.log(yargs.argv)