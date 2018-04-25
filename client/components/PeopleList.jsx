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
        this.state = {
          error:null,
          person: [],
          children: [],
          errorMessage: '',      
        }
        // this.makeChildren = this.makeChildren.bind(this)
        // this.renderPerson = this.renderPerson.bind(this)
        this.show = this.show.bind(this)
    }

    // componentDidMount() {
    //     (this.renderPerson)
    //     }

    // renderPerson(){
    //     console.log({peoplelist:this.props.person})
    //     getPerson(this.props.person.id,(err,person) => {
    //         console.log(person)
    //         this.setState({
    //             person:person || []
    //         })
    //         console.log(this.state.person)
    //     })
    // }

    show() {
        this.setState({ 
            visible: true,
        });
    }
 
    hide() {
        this.setState({ visible: false });
    }

    // makeChildren(id){
    //     getPerson(id,(err,person) => {
    //         console.log(person)
    //         this.setState({
    //             person:person || [],
    //             children:person.children || []
    //         })
    //         console.log(this.state)
    //     })
    // }

    render(){
        console.log({render:this.props})
        const person = this.props.person
    return (
    <Router>
             <div>
                 <p>{person.id}</p>
                 <img /*onClick={this.makeChildren(person.id)}*/ className="img-circle" src={person.image} alt={person.name}/>
                 <a className="name" href='#' onClick={this.show.bind(this)}>{person.name}</a>
                 <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} customStyles={customStyles}> 
                      {/* <Profile person={person}/> */}
                 </Rodal> 
             </div>
     </Router>
        )
}
}

// create a row for each generation and list the name of each person in the that generation for each row