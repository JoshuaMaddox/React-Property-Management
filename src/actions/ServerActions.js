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
  },

  getPropertyToEdit(propertyId) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_PROPERTY_ID',
      payload: { propertyId }
    })
  },

  receiveFinancials(financialData) {
     AppDispatcher.dispatch({
      type: 'RECEIVE_FINANCIAL_DATA',
      payload: { financialData }
    })
  }

}

export default ServerActions