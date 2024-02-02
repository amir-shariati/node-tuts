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
        }
    }
})

console.log(yargs.argv)