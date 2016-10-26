import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _allProperties;

class PropertiesStore extends EventEmitter {
  constructor(){
    super()

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_ALL_PROPERTIES':
        _allProperties = action.payload.allProperties
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

  getAllProperties() {
    return _allProperties
  }

}

export default new PropertiesStore