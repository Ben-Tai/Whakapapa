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
          errorMessage: '',      
        }

        this.refreshState = this.refreshState.bind(this)
        this.show = this.show.bind(this)
    }

    componentDidMount(){
        this.refreshState()
    }

    refreshState(props){
        console.log({props:this.props})
        // getPerson(this.props.person.id, (err, person) => {
        //     console.log({err, person})
        //     this.setState({person})
        //     })
    }

    show() {
        this.setState({ 
            visible: true,
            // person:person || []
        });
    }
 
    hide() {
        this.setState({ visible: false });
    }
    
    render(){
        console.log(this.props)
        const person = this.props.person
    return (
    //    person = this.props.person
    <Router>
            <div>
                {/* <h1>{person.name}</h1> */}
                <img onClick={this.show.bind(this)} className="img-circle" src={person.image} alt={person.name}/>
                <a className="name" href={"/people/" + person.id}>{person.name}</a>
 
                <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} customStyles={customStyles}> 
                  <h1>{this.props.person.name}</h1>  <Profile person={person}/>
                </Rodal>
            </div>
    </Router>
        )
}
}

// create a row for each generation and list the name of each person in the that generation for each row