import React from 'react'
import { HashRouter  as Router, Route, Link} from 'react-router-dom'
import people from '../data/people'
import Modal from './Modal'

class People extends React.PureComponent {
openModal = (e) => {
    e.preventDefault()
    this.modal.open()
}

    render(){
    return (
        <Router>
        <div>
            {people.tairea.map(person => {
                return (
                    <div className="people-list">
                <Link to={person.id + '/profile'} onCilck={openModal}> 
                    <img className="img-circle" src={person.image} alt={person.name}/> {person.name}
                </Link>
                <Modal ref={(node) => { this.modal =node}} /> 
                </div>
                )}
            )}
        </div>
        </Router>
        )
    }
}

export default People
