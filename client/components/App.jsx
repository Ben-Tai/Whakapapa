import React from 'react'
import { HashRouter  as Router, Route, Link} from 'react-router-dom'
import Modal from './Modal'

import PeopleList from './PeopleList'


import {getPerson} from '../api/api'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error:null,
      person: [],
      errorMessage: '',      
    }

    this.refreshList = this.refreshList.bind(this)
    this.renderPerson = this.renderPerson.bind(this)

  }

  componentDidMount () {
    this.refreshList()
  }

  renderPerson (err, person) {
      console.log(person)
    this.setState({
      error: err,
      person: person || []
    })
  }

  refreshList (err) {
    this.setState({
      error: err,
    })
    getPerson(1,this.renderPerson)
  }


  render(){
      console.log(this.state)
  return (
    <Router>
      <div>
        <h1 className="title">Your Whakapapa</h1>
        <div className="container">
   
              <PeopleList person={this.state.person}/>
         
        </div>
      </div>
    </Router>
  )
}
}