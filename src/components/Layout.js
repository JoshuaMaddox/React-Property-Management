import React, { Component } from 'react'
import SomeStore from '../stores/SomeStore'
import { browserHistory, Link } from 'react-router'
import Navbar from './Navbar'


export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      someKey: SomeStore.getAllStuff()
    }
    this._onChange = this._onChange.bind(this)
    this.toClientPage = this.toClientPage.bind(this)
    this.toLandlordPage = this.toLandlordPage.bind(this)
  }

   componentWillMount() {
    SomeStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    SomeStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      someKey: SomeStore.getAllStuff()
    })
  }

  toClientPage() {
    browserHistory.push('/tenants/new')
  }

  toLandlordPage() {
    browserHistory.push('properties/property/new')
  }

  render() {

    return (
      <div className="mainRow">
      <Navbar />
        <h1>Which Are You?</h1>
        <div className="flexBoxRow">
          <button className="mainBtn" onClick={this.toClientPage}>Tenant</button>
          <button className="mainBtn" onClick={this.toLandlordPage}>Property Owner</button>
        </div>
      </div>
    )
  }
}
