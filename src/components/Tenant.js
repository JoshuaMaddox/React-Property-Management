import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ToAPIActions from '../actions/ToAPIActions'
import Navbar from './Navbar'

export default class Tenant extends Component {
  constructor() {
    super();
     this.returnHome = this.returnHome.bind(this)
     this.submitTenant = this.submitTenant.bind(this)
  }

  returnHome() {
    browserHistory.push('/')
  }

   submitTenant(e) {
    e.preventDefault()
    const { first, last, rent, email, phone, moveIn, moveOut } = this.refs
    let newTenant = {
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
    ToAPIActions.sendNewTenant(newTenant)
    // console.log(newTenant)
  }

  render() {

    return (
      <div className="mainRow">
        <Navbar />
         <div className="formFlexBox">
          <label>First Name</label>
          <input type="text" ref='first' className="formInput" placeholder='First Name'/>
          <label>Last Name</label>
          <input type="text" ref='last' className="formInput" placeholder='Last Name'/>
          <label>Expected Monthly Rent</label>
          <input type="number" ref='rent' className="formInput"/>
          <label>Email Address</label>
          <input type="text" ref='email' className="formInput" placeholder='Email Address'/>
          <label>Phone</label>
          <input type="text" ref='phone' className="formInput" placeholder='Phone Number'/>
          <label>Expected Move In Date</label>
          <input type="date" ref='moveIn' className="formInput" placeholder='Expected Move In Date'/>
          <label>Expected Move Out Date</label>
          <input type="date" ref='moveOut' className="formInput" placeholder='Expected Move Out Date'/>
          <button className='mainBtnType' onClick={this.submitTenant}>SUBMIT</button>
        </div>
      </div>
    )
  }
}
