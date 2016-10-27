import API from '../API'

const ToAPIActions = {
  sendNewTenant(newTenant){
   API.sendNewTenant(newTenant)
  },

  getAllTenants() {
    API.getAllTenants()
  },

  sendTenantToEdit(editedTenant, tenantId) {
    API.sendTenantToEdit(editedTenant, tenantId)
  },

  deleteTenant(tenantId) {
    API.deleteTenant(tenantId)
  },

  placeTenant(propId, tenId) {
    API.placeTenant(propId, tenId)
  },

  removeTenantFromProperty(tenantId, propertyId){
    API.removeTenantFromProperty(tenantId, propertyId)
  },

  sendNewProperty(newProperty) {
    API.sendNewProperty(newProperty)
  },

  getAllProperties() {
    API.getAllProperties()
  },

  sendPropertyToEdit(editedProperty, propertyId) {
    API.sendPropertyToEdit(editedProperty, propertyId)
  },

  deleteProperty(propertyId) {
    API.deleteProperty(propertyId)
  },

  getFinancials(){
    API.getFinancials()
  }

}
export default ToAPIActions