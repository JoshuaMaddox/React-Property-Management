import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Layout from './components/Layout'
import LandLord from './components/LandLord'
import Tenant from './components/Tenant'
import AllTenants from './components/AllTenants'



render(
  <div className='container'>
    <Router history = { browserHistory }>
      <Route path = '/' component = { Layout }/>  
      <Route path = '/tenants/new' component = { Tenant }/>  
      <Route path = '/landlord' component = { LandLord }/>  
      <Route path = '/tenants' component = { AllTenants }/>  
    </Router>
  </div>,
  document.getElementById('root')
)