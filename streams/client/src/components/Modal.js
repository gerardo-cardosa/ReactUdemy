import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = props =>{
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={() => history.push('/')}>
            <div className="ui standard modal visible active" onClick={e=> e.stopPropagation()}>
                <div className="header">
                    Delete Stream
                </div>
                <div className="content">
                    Are you sure you wnat to delete this stream???
                </div>
                <div className="actions">
                    <button className="ui button">Cancel</button>
                    <button className="ui primary button">Delete</button>
                </div>
            </div>
        </div> ,
        document.getElementById("modal")

    );
}

export default Modal;