import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ToAPIActions from '../actions/ToAPIActions'
import Navbar from './Navbar'

export default class Property extends Component {
  constructor() {
    super();
    this.returnHome = this.returnHome.bind(this)
    this.submitProperty = this.submitProperty.bind(this)
  }

  returnHome() {
    browserHistory.push('/')
  }

  submitProperty(e) {
    e.preventDefault()
    const { name, rentPrice, address, bedrooms, bathrooms, landlordName, landlordPhone } = this.refs
    let newProperty = {
      name: name.value,
      address: address.value,
      bedrooms: bedrooms.value,
      bathrooms: bathrooms.value,
      rentPrice: parseInt(rentPrice.value),
      landlordName: landlordName.value,
      landlordPhone: landlordPhone.value
    }
    ToAPIActions.sendNewProperty(newProperty)
  }

  render() {

    return (
      <div className="mainRow">
      <Navbar />
        <div className="formFlexBox">
          <label>Property Name</label>
          <input type="text" ref='name' className="formInput" placeholder='Property Name'/>
          <label>Rent Price</label>
          <input type="number" ref='rentPrice' className="formInput" min="1" max="20000"/>
          <label>Address</label>
          <input type="text" ref='address' className="formInput" placeholder='Property Address'/>
          <label>No. of Bedrooms</label>
          <input type="number" ref='bedrooms' className="formInput" min="0" max="30"/>
          <label>No. of Bathrooms</label>
          <input type="number" ref='bathrooms' className="formInput" min="0" max="20"/>
          <label>Landlord Name</label>
          <input type="text" ref='landlordName' className="formInput" placeholder="Landlord's Name"/>
          <label>Landlord Phone</label>
          <input type="text" ref='landlordPhone' className="formInput" placeholder="Landlord's Phone"/>
          <button className='mainBtnType' onClick={this.submitProperty}>SUBMIT</button>
        </div>
      </div>
    )
  }
}
