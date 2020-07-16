import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';


class App extends React.Component{
    state ={};

    onSearchSubmit = async (term)=> {
        console.log(term);
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onSubmit={ this.onSearchSubmit }/>            
            </div>
            
        );
    }
}

export default App;