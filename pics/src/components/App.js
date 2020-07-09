import React from "react";
import axios from 'axios';
import SearchBar from './SearchBar';



class App extends React.Component{

  async onSearchSubmit(term){
    //first argument is the http endpoint
    // second is an object to configure the request
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: term
        },
        headers: {
          Authorization: 'Client-ID 4R_Fx4-SOBCZp28zWlM8a1_Pg-agKwnU_QuqmOkUEc4'
        }
    });

    console.log(response.data.results); 
  }


  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={ this.onSearchSubmit}/>
      </div>
        );
  }
}

export default App;
