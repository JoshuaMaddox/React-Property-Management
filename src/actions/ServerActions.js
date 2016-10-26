import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveAllTenants(allTenants) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ALL_TENANTS',
      payload: { allTenants }
    }) 
  },

  receiveAllProperties(allProperties) {
     AppDispatcher.dispatch({
      type: 'RECEIVE_ALL_PROPERTIES',
      payload: { allProperties }
    })
  },

  getTenantToEdit(tenantId) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_TENANT_ID',
      payload: { tenantId }
    })
  }
}

export default ServerActions