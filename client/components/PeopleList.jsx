import React from 'react'
import { HashRouter  as Router, Route, Link} from 'react-router-dom'

export default function PeopleList (props){
console.log(props)
let person = props.people
    return (
    <Router>
        <div className="people-list ">
            <Link to={person.id + '/profile'}> <img className="img-circle" src={person.image} alt={person.name}/></Link>
            <a className="name" href={"/people/" + person.id}>{person.name}</a>
        </div>
    </Router>
        )
}


// create a row for each generation and list the name of each person in the that generation for each row