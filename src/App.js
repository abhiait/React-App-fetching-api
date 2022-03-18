import React, { Component } from 'react'
import Card from './Components/Card'

import NavBar from './Components/NavBar'
export class App extends Component {

  state = { search:""}
  setsearch=(value)=>{
    this.setState({
      search : value
    })
  }
  render() {

    return (
      <div>
        <NavBar setsearch={this.setsearch}/>
       
        <Card search={this.state.search}/>
      </div>
    )
  }
}

export default App

