const {Schema, model} = require('mongoose')

const ticket = new Schema({
    firstName: {type: String, required: false},
    lastName: {type: String, required: false},
    ticketData: {type: Date, default: Date.now},
    email: {type: String, required: false},
    reason: {type: String, required: false},
    vehicleLocation: {type: String, required: false},
    licensePlate: {type: String, required: false},
    vehicleYear: {type: String, required: false},
    make: {type: String, required: false},
    model: {type: String, required: false},
    color: {type: String, required: false},
    numberTicket: {type: Number, required: false},
    did: {type: Boolean, required: false}
})

module.exports = model('Ticket', ticket)
