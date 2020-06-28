import React from 'react';
import ReactDOM from 'react-dom';

//Extending from React.Component to integrate React functionality
class App extends React.Component {

  render(){
    let pos = ''
    window.navigator.geolocation.getCurrentPosition(
      // call backs success
      (position) => {
        console.log(position)
        pos = position.coords.latitude;
      },
      //fail call back
      (err) => console.log(err)
  
    );
    return <div>Latitude: {pos}</div>
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
