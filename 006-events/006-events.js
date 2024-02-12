const {EventEmitter} = require("events")

const em = new EventEmitter()

em.addListener('event1', data=>{
    console.log('event1: ', data)
})

em.on('event2', data=>{
    console.log('event2: ', data)
})

em.emit('event2', {name:'Amir', family:'Shariati'})
em.emit('event1', "This is first event")