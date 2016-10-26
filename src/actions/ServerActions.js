import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveAllTenants(allTenants){
    AppDispatcher.dispatch({
      type: 'RECEIVE_ALL_TENANTS',
      payload: { allTenants }
    }) 
  }
}

export default ServerActions