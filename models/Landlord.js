const mongoose = require('mongoose')
const Schema = mongoose.Schema

const landlordSchema = new Schema({
  name: { type: String, required: true },
  tenants: [{ type: Schema.Types.ObjectId, ref: 'Tenant' }]
})



const Landlord = mongoose.model('Landlord', landlordSchema)

module.exports = Landlord