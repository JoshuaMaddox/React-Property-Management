import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import { browserHistory } from 'react-router' 

let _allProperties;
let _propertyToEdit

class PropertiesStore extends EventEmitter {
  constructor(){
    super()

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_ALL_PROPERTIES':
        _allProperties = action.payload.allProperties
        this.emit('CHANGE')
        break
        case 'RECEIVE_PROPERTY_ID':
          _propertyToEdit = _allProperties.filter((property) => {
            if(property._id === action.payload.propertyId) {
              return property
            } else {
              return
            }
          })
          console.log('_propertyToEdit in the PropertiesStore: ', _propertyToEdit)
          browserHistory.push('/properties/edit')
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

  getPropertyToEdit() {
    return _propertyToEdit
  }

}

export default new PropertiesStore