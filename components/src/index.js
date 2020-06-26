import React from 'react';
import ReactDOM from 'react-dom';
import CommponentDetail from './CommentDeail';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommponentDetail author="Sam" comment={faker.lorem.words()} avatar={faker.image.avatar()} timeAgo="Yesterday 2:00AM"/>
            <CommponentDetail author="Alex" comment={faker.lorem.words()} avatar={faker.image.avatar()} timeAgo="Today 5:00PM"/>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));