import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ToAPIActions from '../actions/ToAPIActions'
import PropertiesStore from '../stores/PropertiesStore'

export default class PropertySingleView extends Component {
  constructor() {
    super()
    this.state = {
      propertyToView: PropertiesStore.getPropertyToPopulate()
    }
    this._onChange = this._onChange.bind(this)
    this.placeTenant = this.placeTenant.bind(this)
  }

  componentWillMount() {
    PropertiesStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    PropertiesStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      propertyToView: PropertiesStore.getPropertyToPopulate()
    })
  }

  placeTenant(e) {
    e.preventDefault()
    const { tenantId, propertyId } = this.refs
    let propId = propertyId.id
    let tenId = tenantId.value
    ToAPIActions.placeTenant(propId, tenId)
  }

  render() {

    const { propertyToView } = this.state

    let propertyShow; 

    if(propertyToView) {
      propertyShow = propertyToView.map((property) => {
        return (
          <div id={property._id} className="formFlexBox" key={property._id}>
            <p>Name: {property.name}</p>
            <p>Rent Price: {property.rentPrice}</p>
            <p>Address: {property.address}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Landlord Name: {property.landlordName}</p>
            <p>Landlord Phone: {property.landlordPhone}</p>
            <p ref="propertyId" id={property._id}>Id: {property._id}</p>
            <form onSubmit={this.placeTenant}>
              <input ref='tenantId' type="text" placeholder='Enter a Tenant id to Place a Tenant'/><br />
              <button type='submit' className='mainBtnType'>SUBMIT</button>
            </form>
          </div>  
        )
      })
    } else {
      propertyShow = <div><p>No Tenants Registered</p></div>
    }

    return (
      <div className="mainRow">
        {propertyShow}
      </div>
    )
  }
}