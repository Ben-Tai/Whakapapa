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
        let types = ['zoom', 'fade', 'flip', 'door', 'rotate', 'slideUp', 'slideDown', 'slideLeft', 'slideRight'];
        let buttons = types.map((value, index) => {
            let style = {
                animationDelay       : index * 100 + 'ms',
                WebkitAnimationDelay : index * 100 + 'ms'
            };
            return (
                <button key={index} className="btn scale" onClick={this.show.bind(this, value)} style={style}>
                    {value}
                </button>
            )
        });

        return (
            <div className="wrap">
                <div className="container" style={{ paddingTop: (window.innerHeight - 440) / 2 }}>
                    <h1 className="title scale">Rodal</h1>
                    <h3 className="intro scale">A React modal with animations.</h3>
                    <div className="btn-area">{buttons}</div>
                </div>
                <Rodal visible={this.state.visible}
                       onClose={this.hide.bind(this)}
                       animation={this.state.animation}
                >
                    <div className="header">Rodal</div>
                    <div className="body">A React modal with animations.</div>
                    <button className="rodal-confirm-btn" onClick={this.hide.bind(this)}>ok</button>
                    <button className="rodal-cancel-btn" onClick={this.hide.bind(this)}>close</button>
                </Rodal>
            </div>
        )
    }
}