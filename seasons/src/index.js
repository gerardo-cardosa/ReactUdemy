import React from 'react';
import ReactDOM from 'react-dom';

//Extending from React.Component to integrate React functionality
class App extends React.Component {

  render(){
    window.navigator.geolocation.getCurrentPosition(
      // call backs success
      (position) => console.log(position),
      //fail call back
      (err) => console.log(err)
    );
    return <div>Latitude: </div>
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
