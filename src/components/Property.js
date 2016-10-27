import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ToAPIActions from '../actions/ToAPIActions'

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
    console.log('newProperty: ', newProperty)
    ToAPIActions.sendNewProperty(newProperty)
  }

  render() {

    return (
      <div className="mainRow">
        <h1>Property Page</h1>
        <button className='mainBtnType' onClick={this.returnHome}>Back To Home</button>
        <div className="formFlexBox">
          <input type="text" ref='name' className="formInput" placeholder='Property Name'/>
          <input type="number" ref='rentPrice' className="formInput" min="1" max="20000"/>
          <input type="text" ref='address' className="formInput" placeholder='Property Address'/>
          <label>No. of Bedrooms</label>
          <input type="number" ref='bedrooms' className="formInput" min="0" max="30"/>
          <label>No. of Bathrooms</label>
          <input type="number" ref='bathrooms' className="formInput" min="0" max="20"/>
          <input type="text" ref='landlordName' className="formInput" placeholder="Landlord's Name"/>
          <input type="text" ref='landlordPhone' className="formInput" placeholder="Landlord's Phone"/>
          <button className='mainBtnType' onClick={this.submitProperty}>SUBMIT</button>
        </div>
      </div>
    )
  }
}
