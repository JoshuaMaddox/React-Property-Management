import API from '../API'

const ToAPIActions = {
  sendNewTenant(newTenant){
   API.sendNewTenant(newTenant)
  },

  getAllTenants() {
    API.getAllTenants()
  }
}
export default ToAPIActions