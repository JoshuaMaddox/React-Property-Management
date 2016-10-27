const mongoose = require('mongoose')
let Tenant;

const tenantSchema = new mongoose.Schema({
  name: {
    first: {type: String, minlength: 1},
    last: {type: String, minlength: 1}
  },
  expectedRentPrice: {type: Number, min: 1, max: 20000},
  email: { type: String },
  phone: { type: String },
  moveInDate: { type: String },
  moveOutDate: { type: String },
  tags: [{type: String, maxlength: 100}]
})

Tenant = mongoose.model('Tenant', tenantSchema)

module.exports = Tenant