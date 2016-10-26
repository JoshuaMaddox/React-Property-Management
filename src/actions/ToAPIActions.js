import API from '../API'

const ToAPIActions = {
  sendNewTenant(newTenant){
   API.sendNewTenant(newTenant)
  },

  getAllTenants() {
    API.getAllTenants()
  },

  sendNewProperty(newProperty) {
    API.sendNewProperty(newProperty)
  },

  getAllProperties() {
    API.getAllProperties()
  }
}
export default ToAPIActions