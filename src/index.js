import React from 'react'
import { render } from 'react-dom'
import Layout from './components/Layout'
import Tenant from './components/Tenant'
import Property from './components/Property'
import Financials from './components/Financials'
import AllTenants from './components/AllTenants'
import AllProperties from './components/AllProperties'
import EditTenantForm from './components/EditTenantForm'
import { Router, Route, browserHistory } from 'react-router'
import EditPropertyForm from './components/EditPropertyForm'
import PropertySingleView from './components/PropertySingleView'



render(
  <div className='container'>
    <Router history = { browserHistory }>
      <Route path = '/' component = { Layout }/>  
      <Route path = '/tenants/tenant/new' component = { Tenant }/>  
      <Route path = '/properties/property/new' component = { Property }/>  
      <Route path = '/tenants' component = { AllTenants }/>  
      <Route path = '/properties' component = { AllProperties }/>  
      <Route path = '/tenants/tenant/:id' component = { EditTenantForm }/>  
      <Route path = '/properties/edit' component = { EditPropertyForm }/>  
      <Route path = '/properties/property/:id' component = { PropertySingleView }/> 
      <Route path = '/properties/financials' component = { Financials} />
    </Router>
  </div>,
  document.getElementById('root')
)