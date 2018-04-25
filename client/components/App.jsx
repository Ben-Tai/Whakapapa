import React from 'react'
import { HashRouter  as Router, Route, Link} from 'react-router-dom'
import Modal from './Modal'

import PeopleList from './PeopleList'


import {getPerson} from '../api/api'

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            person:1  ,
            children:[]     
        }

        this.renderPerson = this.renderPerson.bind(this)
        
    }

    componentDidMount(){
        this.renderPerson()
        }

    renderPerson(){
        getPerson(this.state.person,(err,person) => {
            this.setState({
                person:person,
                children:person.children
            })
        })
    }

    render(){
        console.log(this.state)
        return (
        <Router>
            <div className="container">
                <h1 className="title">My Whakapapa</h1>
                    <div className="container">
                        <PeopleList 
                        person={this.state.person}
                        children={this.state.children}
                        />
                    </div> 
            </div>
        </Router>
  )
}
}

export default App