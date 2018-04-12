import React from 'react'
import classNames from 'classnames'
import { observable,action } from 'mbox'
import { observer } from 'mbox-react'

@observer
class Modal extends React.PureComponent{

    @observable isOpen = false

    @action open = (e) => {
        if (e) { e.preventdefault();}
        this.isOpen = true;
    }

    @action close = (e) => {
        if (e) { e.preventDefault()}
        this.isOpen = false;
    }

    render(){
        overlayClasses = classNames({open: this.isOpen})
        return (
            <div id='modal' className={overlayClasses}>
                
            </div>

        )
    }
}

export default Modal