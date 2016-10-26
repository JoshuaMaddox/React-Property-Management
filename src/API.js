import { get, post, put } from 'axios'
import axios from 'axios'
import ServerActions from './actions/ServerActions'
import { browserHistory } from 'react-router'

const API = {
  sendNewTenant(newTenant){
    post(`/api/tenants`, newTenant)
      .then(res => {
        let { data } = res
        console.log('data in api ', data)
        browserHistory.push('/tenants')
      })
      .catch(console.error)
  },
  getAllTenants(){
    get(`/api/tenants`)
      .then(res => {
        console.log('res.data: ', res.data)
        let { data } = res
        ServerActions.receiveAllTenants(data)
      })
  },

  sendNewProperty(newProperty) {
    post(`/api/properties`, newProperty)
      .then(res => {
        let { data } = res
        console.log('data in api ', data)
        browserHistory.push('/properties')
      })
      .catch(console.error)
  },

  getAllProperties(){
    get(`/api/properties`)
      .then(res => {
        console.log('res.data: ', res.data)
        let { data } = res
        ServerActions.receiveAllProperties(data)
      })
  }
  
}

export default API