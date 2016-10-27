import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import { browserHistory } from 'react-router'

let _allTenants;
let _tenantToEdit = []

class TenantsStore extends EventEmitter {
  constructor(){
    super()

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_ALL_TENANTS':
          _allTenants = action.payload.allTenants
          this.emit('CHANGE')
          break
        case 'RECEIVE_TENANT_ID':
          _tenantToEdit = _allTenants.filter((tenant) => {
            if(tenant._id === action.payload.tenantId) {
              return tenant
            } else {
              return
            }
          })
          browserHistory.push('/tenants/edit')
          this.emit('CHANGE')
          break
      }
    })
  }

  startListening(cb){
    this.on('CHANGE', cb)
  }

  stopListening(cb){
    this.removeListener('CHANGE', cb)
  }

  getAllTenants() {
    return _allTenants
  }

  getTenantToEdit() {
    return _tenantToEdit
  }

}

export default new TenantsStore