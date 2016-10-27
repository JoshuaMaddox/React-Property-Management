import { get, post, put } from 'axios'
import axios from 'axios'
import ServerActions from './actions/ServerActions'
import { browserHistory } from 'react-router'

const API = {
  sendNewTenant(newTenant){
    post(`/api/tenants`, newTenant)
      .then(res => {
        let { data } = res
        browserHistory.push('/tenants')
      })
      .catch(console.error)
  },

  getAllTenants(){
    get(`/api/tenants`)
      .then(res => {
        let { data } = res
        ServerActions.receiveAllTenants(data)
      })
  },

  sendTenantToEdit(editedTenant, tenantId) {
    put(`/api/tenants/edit/${tenantId}`, editedTenant)
      .then(res => {
        let { data } = res
        browserHistory.push('/tenants')
      })
      .catch(console.error)
  },

  sendNewProperty(newProperty) {
    post(`/api/properties`, newProperty)
      .then(res => {
        let { data } = res
        browserHistory.push('/properties')
      })
      .catch(console.error)
  },

  getAllProperties(){
    get(`/api/properties`)
      .then(res => {
        let { data } = res
        ServerActions.receiveAllProperties(data)
      })
  },

  sendPropertyToEdit(editedProperty, propertyId) {
    put(`/api/properties/edit/${propertyId}`, editedProperty)
      .then(res => {
        let { data } = res
        browserHistory.push('/properties')
      })
      .catch(console.error)
  },

  deleteProperty(propertyId) {
    axios.delete(`/api/properties/${propertyId}`)
      .then(res => {
        let { data } = res
        console.log('data in api sendPropertyToEdit: ', data)
        ServerActions.receiveAllProperties(data)
      })
      .catch(console.error)
  }
  
  
}

export default API