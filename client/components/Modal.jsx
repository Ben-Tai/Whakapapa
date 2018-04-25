import React from 'react';
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
 
export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        console.log({modalprops:props})
        this.state = { 
            visible: false,
            person: []

         };
         console.log("this is current state: " + this.state.person)
         this.refreshList = this.refreshList.bind(this)
         this.show = this.show.bind(this)

    }

    componentDidMount () {
        this.refreshList()
        }
    
   
    refreshList () {
        console.log(this.props.person.id)
    getPerson(this.props.person.id, (err, person) => {
        console.log({err, person})
        this.setState({person})
    })
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
   
 
    render() {
        const person = this.state.person
        console.log({person})
        return (
            <div>
                <img onClick={this.show.bind(this)} className="img-circle" src={person.image} alt={person.name}/>
                <a className="name" href={"/people/" + person.id}>{person.name}</a>
 
                <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} customStyles={customStyles}>
                    <Profile person={person}/>
                </Rodal>
            </div>
        )
    }
}