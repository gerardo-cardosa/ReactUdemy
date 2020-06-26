import React from 'react';
import ReactDOM from 'react-dom';
import CommponentDetail from './CommentDeail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommponentDetail />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));