const fs = require('fs')

const addContact = (fullName, phone, email) => {
    const contacts = loadContacts()
    const isDuplicate = contacts.find(c=>c.fullName === fullName)

    if (!isDuplicate){
        contacts.push({fullName, phone, email})
        saveContact(contacts)
        console.log("contact is added")
    }
    else {
        console.log("contact already existed")
    }
}

const listContacts = () => {
    const contacts = loadContacts()
    contacts.forEach( contact => {
        console.log(`\tfullName: ${contact.fullName}\t phone: ${contact.phone}\t email: ${contact.email}`)
        console.log(`\t-----------------------------------------`)
    })
}

const loadContacts = () => {
    try {
        const contactBuffer = fs.readFileSync('005-contact.json')
        const contacts = contactBuffer.toString()
        return JSON.parse(contacts)
    }
    catch (e){
        return []
    }
}

const saveContact = (contacts) => {
    const data = JSON.stringify(contacts)
    fs.writeFileSync('005-contact.json', data)
}

module.exports = {
    addContact,
    listContacts,
}
