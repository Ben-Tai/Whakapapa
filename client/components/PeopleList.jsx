import React from 'react'
import { HashRouter  as Router, Route, Link} from 'react-router-dom'

import Modal from './Modal'

export default function PeopleList (props){
    return (
    <Router>
        <div className="people-list ">
        <Modal person={props.person} />
            {/* <Link to={'/profile' + person.id}> <img className="img-circle" src={person.image} alt={person.name}/></Link>
            <a className="name" href={"/people/" + person.id}>{person.name}</a> */}
        </div>
    </Router>
        )
}


// create a row for each generation and list the name of each person in the that generation for each row