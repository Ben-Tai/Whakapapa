import React from 'react'
import { HashRouter  as Router, Route, Link} from 'react-router-dom'
import people from '../data/people'

class People extends React.PureComponent {


    render(){
    return (
        <Router>
        <div className="container">
            {people.tairea.map(person => { person.parent_id
            console.log(person.parent_id)
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
}

export default People


// create a row for each generation and list the name of each person in the that generation for each row