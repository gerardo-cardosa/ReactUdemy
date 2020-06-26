import React from 'react';
import ReactDOM from 'react-dom';
import CommponentDetail from 'CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommponentDetail />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));