const fs = require('fs')

const addContact = (fullName, phone, email) => {
    const contacts = loadContacts()
    const isDuplicate = contacts.find(c=>c.fullName === fullName)

    if (!isDuplicate){
        console.log("contact is added")
    }
    else {
        console.log("contact already existed")
    }
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