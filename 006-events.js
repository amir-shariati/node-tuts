const {EventEmitter} = require("events")

const em = EventEmitter()

em.addListener('event1', data=>{
    console.log('event1: ', data)
})