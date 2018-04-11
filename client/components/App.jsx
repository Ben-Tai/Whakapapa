import React from 'react'
import { HashRouter  as Router, Route, Link} from 'react-router-dom'
import people from '../data/people'

const App = () => {

  console.log({people})

  return (
    <Router>
      <div>
         <h1 className="title">Your Whakapapa</h1>
         {people.tairea.map(person => {
              return <li><Link to={person.name + '/profile'}> {person.name}</Link></li>
              })}
      </div>
    </Router>
  )
}

export default App

function capFirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}