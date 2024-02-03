const fs = require('fs')

const addContact = (fullName, phone, email) => {

}

const loadContacts = () => {
    try {
        const contactBuffer = fs.readFileSync('005-contact.json')
        const contacts = contactBuffer.toString()
        return JSON.parse(contacts)
    }
    catch (e){
        console.log(e)
        return []
    }

}