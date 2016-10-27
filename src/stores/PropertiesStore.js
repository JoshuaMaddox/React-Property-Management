import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import { browserHistory } from 'react-router' 

let _allProperties;
let _propertyToPopulate
let _financialData

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
          _propertyToPopulate = _allProperties.filter((property) => {
            if(property._id === action.payload.propertyId) {
              return property
            } else {
              return
            }
          })
          this.emit('CHANGE')
          break
        case 'RECEIVE_FINANCIAL_DATA':
          _financialData = action.payload.financialData
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

  getPropertyToPopulate() {
    return _propertyToPopulate
  }

  getFinancialData() {
    return _financialData
  }

}

export default new PropertiesStore