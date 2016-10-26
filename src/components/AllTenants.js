import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import ToAPIActions from '../actions/ToAPIActions'
import TenantsStore from '../stores/TenantsStore'

export default class Tenent extends Component {
  constructor() {
    super()
    this.state = {
      allTenants: TenantsStore.getAllTenants()
    }
    this._onChange = this._onChange.bind(this)
    this.returnHome = this.returnHome.bind(this)
  }

  componentWillMount() {
    ToAPIActions.getAllTenants()
    TenantsStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    TenantsStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      allTenants: TenantsStore.getAllTenants()
    })
  }

  returnHome() {
    browserHistory.push('/')
  }

  render() {

    const { allTenants } = this.state

    let tenantsShow; 

    if(allTenants) {
      tenantsShow = allTenants.map((tenant) => {
        return (
          <div className="tenantContainer" key={tenant._id}>
            <div className="nameContainer">
              <p>{tenant.name.first} {tenant.name.last}</p>
            </div>
            <p>{tenant.expectedRentPrice}</p>
            <p>{tenant.email}</p>
            <p>{tenant.phone}</p>
            <p>{tenant.moveInDate}</p>
            <p>{tenant.moveOutDate}</p>
            <div className="tenantBtns">
              <button className='tenantBtn'>Edit</button>
              <button className='tenantBtn'>Delete</button>
            </div>
          </div>  
        )
      })
    } else {
      tenantsShow = <div><p>No Tenants Registered</p></div>
    }

    return (
      <div className="mainRow">
        {tenantsShow}
      </div>
    )
  }
}
