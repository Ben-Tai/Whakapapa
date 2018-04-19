import React from 'react'
import { HashRouter  as Router, Route, Link} from 'react-router-dom'


export default class Profile extends React.Component {
    constructor (props){
        super(props)
    }
   

    render() {
        return (
            <Router>
                <div>
                    <h1>hello</h1>
                    <h2>{this.props.person.id}</h2>
                    {console.log}
                </div>
            </Router>
        )
    }  
}

  

 