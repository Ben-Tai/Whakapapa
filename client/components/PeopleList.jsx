import React from 'react';
import { HashRouter  as Router, Route, Link} from 'react-router-dom'
import Rodal from 'rodal';
import Profile from './Profile'

import {getPerson} from '../api/api'

// include styles
import 'rodal/lib/rodal.css';

const customStyles = {
    width: '800px',
    height: '800px',
    margin: 'auto'
}
export default class PeopleList extends React.Component{
    
    constructor (props) {
        super(props)
        console.log({props})
        this.state = {
            person: {},
            showChildren: false,
            showModal: false
        }

        // this.renderPerson = this.renderPerson.bind(this, props.person)
        
    }

    componentDidMount() {
        this.findPerson(this.props.person   )
    }

    showModal() {
        this.setState({
            showModal: true
        })
    }

    hideModal() {
        this.setState({
            showModal: false
        })
    }

    showChildren() {
        this.setState({ 
            showChildren: true,
        });
    }

    findPerson(id){
        getPerson(id,(err,person) => {
            console.log(person)
            this.setState({
                person:person || []
            })
            console.log(this.state)
        })
    }

    

    render(){
        console.log({state:this.state})
        const person = this.state.person
        return (
        <React.Fragment className="people-list">
            <div className="people-list">
                <span className="person column is-narrow">
                <center><img onClick={() => this.showChildren()} className="img-circle" src={person.image} alt={person.name}/>
                <a className="name" href='#' onClick={this.showModal.bind(this)}>{person.name}</a></center>
                </span> 
                <Rodal visible={this.state.showModal} onClose={this.hideModal.bind(this)} customStyles={customStyles}> 
                {/* <Profile person={p  erson}/> */}
                </Rodal>
                
                    <br />
                {person && person.children && this.state.showChildren && 
                <div className="columns is-6 is-multiline">
                    {person.children.map(child => 
                        <span className="column is-narrow">
                            <PeopleList person={child.id} />
                        </span>)} 
                </div>}
            </div>
        </React.Fragment>    
        )
    }   
}

// create a row for each generation and list the name of each person in the that generation for each row