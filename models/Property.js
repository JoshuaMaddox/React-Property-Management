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

propertySchema.statics.calcFinancials = function(propertyId) {
  return this.find()
    .then(properties => {
      var finObj = {
        rentPrice: 0,
        tenants: 0,
        bedrooms: 0,
        bathrooms: 0,
        totalProperties: 0,
        totalPropertiesRented: 0,
        rentedRevenue: 0
      }
      properties.forEach(property => {
          finObj.rentPrice += property.rentPrice
          finObj.tenants += property.tenants.length
          finObj.bedrooms += parseInt(property.bedrooms)
          finObj.bathrooms += parseInt(property.bathrooms)
          finObj.totalProperties++
          if(property.tenants.length) {
            finObj.totalPropertiesRented++
            finObj.rentedRevenue += property.rentPrice
          }
      })
      return finObj
    })
}

const Property = mongoose.model('Property', propertySchema)

module.exports = Property
