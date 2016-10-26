import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _stuff;

class SomeStore extends EventEmitter {
  constructor(){
    super()

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'TYPE_NAME':
        _stuff = action.payload.varName
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

  getAllStuff() {
    return _stuff
  }

}

export default new SomeStore