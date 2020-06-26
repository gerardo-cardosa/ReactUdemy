// Import the react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React Component
const App = function(){
    const buttonText = 'Click Me!!';
    return (
        <div style={{ boder:"1px solid red" }}>
            <label className="label" for="name">
                Enter Name:
            </label>
            <input id="name" type="text" />
    <button style={{ backgroundColor: "blue", color: "white"}} >{ buttonText }</button>
        </div>
    );
}

// Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root') 
);