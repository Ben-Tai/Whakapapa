import React from 'react'
import { HashRouter  as Router, Route, Link} from 'react-router-dom'
import Modal from './Modal'

import PeopleList from './PeopleList'


import {getPerson} from '../api/api'

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            person:[]       
        }

        this.renderPerson = this.renderPerson.bind(this)
        
    }

    componentWillMount(){
        this.renderPerson()
        }

    renderPerson(){
        getPerson(1,(err,person) => {
            console.log(person)
            this.setState({
                person:person
            })
            console.log(this.state.person)
        })
    }

    render(){
        console.log(this.state)
        return (
            <Router>
            <div>
                <h1 className="title">My Whakapapa</h1>
                <p>{this.state.person.name}</p>
                <div className="container">
        
                    <PeopleList person={this.state.person}/>
                
                </div> 
            </div>
            </Router>
  )
}
}

export default App