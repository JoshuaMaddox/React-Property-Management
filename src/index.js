import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import Layout from './components/Layout'
import Property from './components/Property'
import Tenant from './components/Tenant'
import AllTenants from './components/AllTenants'
import AllProperties from './components/AllProperties'
import EditTenantForm from './components/EditTenantForm'



render(
  <div className='container'>
    <Router history = { browserHistory }>
      <Route path = '/' component = { Layout }/>  
      <Route path = '/tenants/new' component = { Tenant }/>  
      <Route path = '/property' component = { Property }/>  
      <Route path = '/tenants' component = { AllTenants }/>  
      <Route path = '/properties' component = { AllProperties }/>  
      <Route path = '/tenants/edit' component = { EditTenantForm }/>  
    </Router>
  </div>,
  document.getElementById('root')
)