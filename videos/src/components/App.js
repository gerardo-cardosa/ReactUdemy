import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideDetail from "./VideoDetail";

const KEY = "AIzaSyCZ15EH4BulbV90quTE_PQMZXNQD9eMMFo";

class App extends React.Component {
  state = { videos: [], selected: null };

  onSearchSubmit = async (term) => {
    //this.setState({ selected: null });

    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: `${KEY}`,
      },
    });

    this.setState({ 
        videos: response.data.items,
        selected: response.data.items[0] 
    
    });

    console.log(this.state.videos);
  };


  componentDidMount(){
      this.onSearchSubmit('Metallica');
  }

  onVideoSelected = (video) => {
    this.setState({ selected: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideDetail video={this.state.selected} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelected={this.onVideoSelected}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
