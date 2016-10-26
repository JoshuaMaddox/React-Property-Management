import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super();

    this.submitTenant = this.submitTenant.bind(this)
  }

 

  render() {

    return (
      <form onSubmit={this.submitTenant}>

      </form>
    )
  }
}
