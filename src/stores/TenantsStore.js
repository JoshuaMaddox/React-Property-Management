import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _allTenants;

class TenantsStore extends EventEmitter {
  constructor(){
    super()

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_ALL_TENANTS':
        _allTenants = action.payload.allTenants
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

}

export default new TenantsStore