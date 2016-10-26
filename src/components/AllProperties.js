import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ToAPIActions from '../actions/ToAPIActions'
import PropertiesStore from '../stores/PropertiesStore'

export default class AllProperties extends Component {
  constructor() {
    super()
    this.state = {
      allProperties: PropertiesStore.getAllProperties()
    }
    this._onChange = this._onChange.bind(this)
    this.returnHome = this.returnHome.bind(this)
    this.editProperty = this.editProperty.bind(this)
    this.deleteProperty = this.deleteProperty.bind(this)
  }

  componentWillMount() {
    ToAPIActions.getAllProperties()
    PropertiesStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    PropertiesStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      allProperties: PropertiesStore.getAllProperties()
    })
  }

  returnHome() {
    browserHistory.push('/')
  }

  editProperty() {

  }

  deleteProperty() {
    
  }

  render() {

    const { allProperties } = this.state

    let propertiesShow; 

    if(allProperties) {
      propertiesShow = allProperties.map((property) => {
        return (
          <div className="tenantContainer" key={property._id}>
            <div className="nameContainer">
              <p>{property.name}</p>
            </div>
            <p>{property.rentPrice}</p>
            <p>{property.address}</p>
            <p>{property.bedrooms}</p>
            <p>{property.bathrooms}</p>
            <p>{property.landlordName}</p>
            <p>{property.landlordPhone}</p>
            <div className="tenantBtns">
              <button id={property._id} onClick={this.editProperty} className='tenantBtn'>Edit</button>
              <button id={property._id} onCLick={this.deleteProperty} className='tenantBtn'>Delete</button>
            </div>
          </div>  
        )
      })
    } else {
      propertiesShow = <div><p>No Properties Registered</p></div>
    }

    return (
      <div className="mainRow">
        {propertiesShow}
      </div>
    )
  }
}
