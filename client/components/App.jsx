import React from 'react'
// import { HashRouter  as Router, Route, Link} from 'react-router-dom'

import Profile from './Profile'
import PeopleList from './PeopleList'
import Modal from './Modal'

import {getPeople} from '../api/api'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      error:null,
      people: [],
      errorMessage: '',
      activePerson:null,
      profileVisible:false,
      
    }

    this.refreshList = this.refreshList.bind(this)
    this.renderPeople = this.renderPeople.bind(this)
    this.showProfile = this.showProfile.bind(this)
    this.closeProfile = this.closeProfile.bind(this)
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

  showProfile(person){
    this.setState({
      activePerson:person,
      profileVisible:true
    })
  }

  closeProfile(person){
    this.setState({
      profileVisible:false
    })
  }

  render(){

  return (
      <div>
        <h1 className="title">Your Whakapapa</h1>
        <div className="container">
          {this.state.people.map(person => {
                return(     
              <PeopleList people={person}/>
            )}
          )}
        </div>
        <Modal />
      </div>
  )
}
}

function capFirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}