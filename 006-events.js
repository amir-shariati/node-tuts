const {EventEmitter} = require("events")

const em = new EventEmitter()

em.addListener('event1', data=>{
    console.log('event1: ', data)
})