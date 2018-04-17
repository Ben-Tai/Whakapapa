import React from 'react'
import { HashRouter  as Router, Route, Link} from 'react-router-dom'

export default function PeopleList (props){
console.log(props)
    return (
    <Router>
        <div className="container">
            {props.people.map(person => { person.parent_id
                return(     
                        <div className="people-list ">
                            <Link to={person.id + '/profile'}> <img className="img-circle" src={person.image} alt={person.name}/></Link>
                            <a className="name" href={"/people/" + person.id}>{person.name}</a>
                        </div>
                )}
            )}
        </div>
    </Router>
        )
}


// create a row for each generation and list the name of each person in the that generation for each row