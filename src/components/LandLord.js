import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class LandLord extends Component {
  constructor() {
    super();
    this.returnHome = this.returnHome.bind(this)
  }

  returnHome() {
    browserHistory.push('/')
  }

  render() {

    return (
      <div className="mainRow">
        <h1>Landlord Page</h1>
        <button className='mainBtnType' onClick={this.returnHome}>Back To Home</button>
      </div>
    )
  }
}
