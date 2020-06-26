import React from 'react';
import ReactDOM from 'react-dom';
import CommponentDetail from './CommentDeail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
                <CommponentDetail 
                    author={ faker.internet.userName() }
                    comment={faker.lorem.words()} 
                    avatar={faker.image.avatar()} 
                    timeAgo={ faker.date.past().toTimeString()}
                />
            </ApprovalCard>
            <ApprovalCard >
                <CommponentDetail 
                    author={ faker.internet.userName() }
                    comment={faker.lorem.words()} 
                    avatar={faker.image.avatar()} 
                    timeAgo={ faker.date.past().toTimeString()}
                />
            </ApprovalCard>
            
            
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));