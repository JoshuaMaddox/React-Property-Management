import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ToAPIActions from '../actions/ToAPIActions'
import ServerActions from '../actions/ServerActions'
import PropertiesStore from '../stores/PropertiesStore'
import Navbar from './Navbar'

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
    this.viewProperty = this.viewProperty.bind(this)
    this.removeTenant = this.removeTenant.bind(this)
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

  editProperty(e) {
    let propertyId = e.target.id
    ServerActions.getPropertyToEdit(propertyId)
    browserHistory.push(`/properties/edit/${propertyId}`)
  }

  deleteProperty(e) {
    let propertyId = e.target.id
    ToAPIActions.deleteProperty(propertyId)
  }

  viewProperty(e) {
    let propertyId = e.target.id
    ServerActions.getPropertyToEdit(propertyId)
    browserHistory.push(`/properties/property/${propertyId}`)
  }

  removeTenant(e) {
    let tenantId = e.target.id
    let propertyId = document.getElementById(tenantId)
    propertyId = propertyId.dataset.propertyid
    ToAPIActions.removeTenantFromProperty(tenantId, propertyId)
    browserHistory.push(`/properties`)
  }

  render() {

    const { allProperties } = this.state

    let propertiesShow; 
    let tenantsBtns;

    if(allProperties) {
      propertiesShow = allProperties.map((property) => {
        {if(property.tenants) {
          tenantsBtns = property.tenants.map((tenant) => {
            return (
              <button key={tenant._id} id={tenant._id} data-propertyId={property._id} onClick={this.removeTenant} className="tenantBtns">{tenant.name.first} {tenant.name.last}</button>
            )
          }) 
        }}
        return (
          <div className="tenantContainer" key={property._id}>
            <div className="nameContainer">
              <p>Name of Property: {property.name}</p>
            </div>
            <p>Rent Price: {property.rentPrice}</p>
            <p>Address: {property.address}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Landlord's Name: {property.landlordName}</p>
            <p>Landlord's Phone: {property.landlordPhone}</p>
            <p>Tenants Living in This Property:</p>
            {tenantsBtns ? tenantsBtns : <p>Currently No Tenants</p>}
            <div className="tenantBtns">
              <button id={property._id} onClick={this.editProperty} className='tenantBtn'>Edit</button>
              <button id={property._id} onClick={this.deleteProperty} className='tenantBtn'>Delete</button>
              <button id={property._id} onClick={this.viewProperty} className='tenantBtn'>View</button>
            </div>
          </div>  
        )
      })
    } else {
      propertiesShow = <div><p>No Properties Registered</p></div>
    }

    return (
      <div className="mainRow">
      <Navbar />
        {propertiesShow}
      </div>
    )
  }
}
