import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//Extending from React.Component to integrate React functionality
class App extends React.Component {
  state = {lat: null, long: 40, errorMessage: ''};

  // Lifecycle React component
  componentWillMount(){
    window.navigator.geolocation.getCurrentPosition(
      // call backs success
      (position) => {
        console.log(position)
         this.setState({lat: position.coords.latitude})
        
      },
      //fail call back
      (err) => {
        console.log(err);
        this.setState({errorMessage: err.message});
      }
    );
  }

  // This is a reequirement from React
  render(){
      if(this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>
      }

      if(!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay lat={this.state.lat}/>
      }

      return <Spinner text="Allow location"/>
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
