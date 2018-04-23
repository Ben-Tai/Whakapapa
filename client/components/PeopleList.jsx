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
        console.log(this.props)
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
        console.log({person:props})
    // getPerson(this.props.person.id, (err, person) => {
    //     console.log({err, person})
    //     this.setState({person})
        // })
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
        const {person} = this.state
    return (
       
    <Router>
            <div>
                <img onClick={this.show.bind(this)} className="img-circle" src={person.image} alt={person.name}/>
                <a className="name" href={"/people/" + person.id}>{person.name}</a>
 
                <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} customStyles={customStyles}>
                    <Profile person={person}/>
                </Rodal>
            </div>
    </Router>
        )
}
}

// create a row for each generation and list the name of each person in the that generation for each row