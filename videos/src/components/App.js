import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube'
import VideDetail from './VideoDetail';

const KEY = 'AIzaSyCZ15EH4BulbV90quTE_PQMZXNQD9eMMFo';

class App extends React.Component{
    state ={ videos: [], selected: null};

    onSearchSubmit = async (term)=> {
        console.log(term);

       const response = await youtube.get("/search", {
            params: {
                q: term,
                part:'snippet',
                maxResults: 5,
                type: 'video',
                key: `${KEY}`
            }
        });

        this.setState({ videos: response.data.items});

        console.log(this.state.videos);

    }

    onVideoSelected = (video) => {
        this.setState({ selected: video});
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onSubmit={ this.onSearchSubmit }/>      
                <VideDetail   video={ this.state.selected} />
                <VideoList onVideoSelected={ this.onVideoSelected } videos={ this.state.videos } />      
            </div>
            
        );
    }
}

export default App;