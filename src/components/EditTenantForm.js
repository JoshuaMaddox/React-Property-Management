import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ToAPIActions from '../actions/ToAPIActions'
import TenantsStore from '../stores/TenantsStore'
import Navbar from './Navbar'

export default class EditTenantForm extends Component {
  constructor() {
    super()
    this.state = {
      tenantToEdit: TenantsStore.getTenantToEdit()
    }
    this._onChange = this._onChange.bind(this)
    this.returnHome = this.returnHome.bind(this)
    this.editTenant = this.editTenant.bind(this)
  }

  componentWillMount() {
    TenantsStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    TenantsStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      tenantToEdit: TenantsStore.getTenantToEdit()
    })
  }

  returnHome(e) {
    browserHistory.push('/')
  }

  editTenant(e) {
    let tenantId = e.target.id
    const { first, last, rent, email, phone, moveIn, moveOut } = this.refs
    let editedTenant = {
      name: {
        first: first.value,
        last: last.value
      },
      expectedRentPrice: parseInt(rent.value),
      email: email.value,
      phone: phone.value,
      moveInDate: moveIn.value,
      moveOutDate: moveOut.value
    }
    console.log('editTenant in EditTenantForm: ', editedTenant)
    ToAPIActions.sendTenantToEdit(editedTenant, tenantId)
  }

  render() {

    const { tenantToEdit } = this.state

    let tenantShow; 

    if(tenantToEdit) {
      tenantShow = tenantToEdit.map((tenant) => {
        return (
          <div className="formFlexBox" key={tenant._id}>
            <input type="text" ref='first' className="formInput" defaultValue={tenant.name.first}/>
            <input type="text" ref='last' className="formInput" defaultValue={tenant.name.last}/>
            <label>Expected Monthly Rent</label>
            <input type="number" ref='rent' defaultValue={tenant.expectedRentPrice}/>
            <input type="text" ref='email' className="formInput" defaultValue={tenant.email}/>
            <input type="text" ref='phone' className="formInput" defaultValue={tenant.phone}/>
            <label>Expected Move In Date</label>
            <input type="date" ref='moveIn' className="formInput" defaultValue={tenant.moveInDate}/>
            <label>Expected Move Out Date</label>
            <input type="date" ref='moveOut' className="formInput" defaultValue={tenant.moveOutDate}/>
            <button id={tenant._id} className='mainBtnType' onClick={this.editTenant}>SUBMIT EDIT</button>
          </div>  
        )
      })
    } else {
      tenantShow = <div><p>No Tenants Registered</p></div>
    }

    return (
      <div className="mainRow">
      <Navbar />
        {tenantShow}
      </div>
    )
  }
}
