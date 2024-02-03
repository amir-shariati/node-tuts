const fs = require('fs')

const addContact = (fullName, phone, email) => {
    const contacts = loadContacts()
    console.log(fullName)
    console.log(phone)
    console.log(email)
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
    console.log(contacts)
    const data = JSON.stringify(contacts)
    console.log(data)
    console.log(data.toString())
    fs.writeFileSync('005-contact.json', data)
}

module.exports = {
    addContact,
}
