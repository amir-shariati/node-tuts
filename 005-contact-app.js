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
        }
    }
})

console.log(yargs.argv)