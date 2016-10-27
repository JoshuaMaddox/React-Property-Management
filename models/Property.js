const mongoose = require('mongoose')
const Schema = mongoose.Schema

const propertySchema = new Schema({
  name: { type: String, required: true },
  rentPrice: { type: Number, required: true},
  address: {type: String},
  bedrooms: {type: String},
  bathrooms: {type: String},
  landlordName: {type: String},
  landlordPhone: {type: String},
  tenants: [{ type: Schema.Types.ObjectId, ref: 'Tenant' }]
})

// propertySchema.statics.removeAndSendAll = function(propertyId) {
//   this.findByIdAndRemove(propertyId)
//     .then( () => this.find() )
// }

const Property = mongoose.model('Property', propertySchema)

module.exports = Property