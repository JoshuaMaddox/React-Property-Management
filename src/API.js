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
        browserHistory.push(`tenants/tenant/${tenantId}`)
      })
      .catch(console.error)
  },

  deleteTenant(tenantId) {
    axios.delete(`/api/tenants/${tenantId}`)
      .then(res => {
        let { data } = res
        ServerActions.receiveAllTenants(data)
      })
      .catch(console.error)
  },

  placeTenant(propId, tenId) {
    put(`/api/properties/${propId}/addTenant/${tenId}`)
      .then(res => {
        let { data } = res
        browserHistory.push('/properties')
      })
  },

  removeTenantFromProperty(tenantId, propertyId) {
    put(`/api/properties/${propertyId}/removeTenant/${tenantId}`)
      .then(res => {
        let { data } = res
        console.log('Am I getting all properties?: ', data)
        ServerActions.receiveAllProperties(data)
      })
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
        ServerActions.receiveAllProperties(data)
      })
      .catch(console.error)
  },

  getFinancials(){
    get(`/api/properties/financials`)
      .then(res => {
        let { data } = res
        ServerActions.receiveFinancials(data)
      })
  }
  
  
}

export default API