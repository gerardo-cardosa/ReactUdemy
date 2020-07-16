import React from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../apis/youtube'

const KEY = 'AIzaSyCZ15EH4BulbV90quTE_PQMZXNQD9eMMFo';

class App extends React.Component{
    state ={};

    onSearchSubmit = async (term)=> {
        console.log(term);

        youtube.get("/search", {
            params: {
                q: term,
                part:"snippet",
                maxResults: 5, 
                key: KEY
            }
        });

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