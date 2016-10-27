import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ToAPIActions from '../actions/ToAPIActions'
import PropertiesStore from '../stores/PropertiesStore'
import Navbar from './Navbar'

export default class EditPropertyForn extends Component {
  constructor() {
    super()
    this.state = {
      propertyToEdit: PropertiesStore.getPropertyToPopulate()
    }
    this._onChange = this._onChange.bind(this)
    this.returnHome = this.returnHome.bind(this)
    this.editProperty = this.editProperty.bind(this)
  }

  componentWillMount() {
    PropertiesStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    PropertiesStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      propertyToEdit: PropertiesStore.getPropertyToPopulate()
    })
  }

  returnHome(e) {
    browserHistory.push('/')
  }

  editProperty(e) {
    e.preventDefault()
    let propertyId = e.target.id
    const { name, rentPrice, imageUrl, address, bedrooms, bathrooms, landlordName, landlordPhone } = this.refs
    let editedProperty = {
      name: name.value,
      rentPrice: parseInt(rentPrice.value),
      address: address.value,
      bedrooms: bedrooms.value,
      bathrooms: bathrooms.value,
      image: imageUrl.value,
      landlordName: landlordName.value,
      landlordPhone: landlordPhone.value
    }
    console.log('editedProperty: ', editedProperty)
    ToAPIActions.sendPropertyToEdit(editedProperty, propertyId)
  }

  render() {

    const { propertyToEdit } = this.state

    let propertyShow;

    if(propertyToEdit) {
      propertyShow = propertyToEdit.map((property) => {
        return (
          <div className="formFlexBox" key={property._id}>
            <label>Property Name</label>
            <input type="text" ref='name' className="formInput" defaultValue={property.name}/>
            <label>Rent Price</label>
            <input type="number" ref='rentPrice' className="formInput" defaultValue={property.rentPrice}/>
            <label>Property Address</label>
            <input type="text" ref='address' defaultValue={property.address}/>
            <label>No. of Bedrooms</label>
            <input type="text" ref='bedrooms' className="formInput" defaultValue={property.bedrooms}/>
            <label>No. of Bathrooms</label>
            <input type="text" ref='bathrooms' className="formInput" defaultValue={property.bathrooms}/>
            <label>Image Url</label>
            <input type="text" ref='imageUrl' className="formInput" defaultValue={property.image}/>
            <label>Landlord Name</label>
            <input type="text" ref='landlordName' className="formInput" defaultValue={property.landlordName}/>
            <label>Landlord Phone</label>
            <input type="text" ref='landlordPhone' className="formInput" defaultValue={property.landlordPhone}/>
            <button id={property._id} className='mainBtnType' onClick={this.editProperty}>SUBMIT EDIT</button>
          </div>  
        )
      })
    } else {
      propertyShow = <div><p>No Tenants Registered</p></div>
    }

    return (
      <div className="mainRow">
      <Navbar />
        {propertyShow}
      </div>
    )
  }
}
