import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Navbar extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className='mainNav'>
        <p className='brandName'>Website  Name</p>
        <nav className="navLinks">
          <li className='navItem'><Link to={'/tenants/tenant/new'}>Add Tenant</Link></li>
          <li className='navItem'><Link to={'/tenants'}>View Tenants</Link></li>
          <li className='navItem'><Link to={'/properties'}>View Properties</Link></li>
          <li className='navItem'><Link to={'/properties/property/new'}>Add Property</Link></li>
        </nav>
      </div>
    )
  }
}
