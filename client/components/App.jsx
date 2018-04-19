import React from 'react'
import { HashRouter  as Router, Route, Link} from 'react-router-dom'
import Modal from './Modal'

import PeopleList from './PeopleList'


import {getPeople} from '../api/api'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error:null,
      people: [],
      errorMessage: '',      
    }

    this.refreshList = this.refreshList.bind(this)
    this.renderPeople = this.renderPeople.bind(this)

  }

  componentDidMount () {
    this.refreshList()
  }

  renderPeople (err, people) {
    this.setState({
      error: err,
      people: people || []
    })
  }

  refreshList (err) {
    this.setState({
      error: err,
      addWidgetVisible: false
    })
    getPeople(this.renderPeople)
  }


  render(){
  return (
    <Router>
      <div>
        <h1 className="title">Your Whakapapa</h1>
        <div className="container">
          {this.state.people.map(person => {
                return(     
              <PeopleList person={person}/>
            )}
          )}
        </div>
      </div>
    </Router>
  )
}
}

function capFirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}