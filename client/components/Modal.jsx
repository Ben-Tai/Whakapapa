import React from 'react';
import Rodal from 'rodal';
 
// include styles
import 'rodal/lib/rodal.css';
 
export default class Modal extends React.Component {
 
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }
 
    show() {
        this.setState({ visible: true });
    }
 
    hide() {
        this.setState({ visible: false });
    }
 
    render() {
        console.log(this.state)
        return (
            <div>
                <button onClick={this.show.bind(this)}>show</button>
 
                <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
                    <div>Content</div>
                </Rodal>
            </div>
        )
    }
}