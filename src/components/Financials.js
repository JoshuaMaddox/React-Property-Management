import React, { Component } from 'react'
import Navbar from './Navbar'
import PropertiesStore from '../stores/PropertiesStore'
import ToAPIActions from '../actions/ToAPIActions'

export default class Financials extends Component {
  constructor() {
    super();
    this.state = {
      financialData: PropertiesStore.getFinancialData()
    }
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount() {
    ToAPIActions.getFinancials()
    PropertiesStore.startListening(this._onChange)
  }

  componentWillUnmount() {
    PropertiesStore.stopListening(this._onChange)
  }

  _onChange() {
    this.setState({
      financialData: PropertiesStore.getFinancialData()
    })
  }

  render() {

    const { financialData } = this.state
    let financialShow;

    if(financialData) {
      financialShow = (
      <div className="financialDataWrapper">
        <h2 className="financialData">Total Tenants: {financialData.tenants}</h2>
        <h2 className="financialData">Total Possible Rent: {financialData.rentPrice}</h2>
        <h2 className="financialData">Total Rent from Rented: {financialData.rentedRevenue}</h2>
        <h2 className="financialData">Total No. of Bedrooms: {financialData.bedrooms}</h2>
        <h2 className="financialData">Total No. of Bathrooms: {financialData.bathrooms}</h2>
        <h2 className="financialData">Total No. of Properties: {financialData.totalProperties}</h2>
        <h2 className="financialData">Total No. of Properties Rented: {financialData.totalPropertiesRented}</h2>
      </div>
      )
    }

    return (
      <div className="mainRow">
        <Navbar />
        <h1>Financials Page</h1>
        {financialShow ? financialShow : <h2>Add Properites to Show Financial Data</h2>}
      </div>
    )
  }
}
