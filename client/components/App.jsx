import React from 'react'
import { HashRouter  as Router, Route, Link} from 'react-router-dom'
import people from '../data/people'
import db from '../../utils/db'

import Profile from './Profile'
import People from './People'
import Modal from './Modal'

const App = () => {

  return (
    <Router>
      <div>
        <h1 className="title">Your Whakapapa</h1>
        <div>
          <Route exact path='/' component={(props) => <People people={props}/> }/>
          <Route exact path='/:id/profile' component={(props) => <Profile person={props}/>}/>
          <Modal ref={(node) => { this.modal =node}} />
        </div>
      </div>
    </Router>
  )
}

export default App

function capFirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}