import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";
import VideDetail from "./VideoDetail";

const KEY = "AIzaSyCZ15EH4BulbV90quTE_PQMZXNQD9eMMFo";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selected, setSeletected] = useState(null);

  useEffect(() => {
    onSearchSubmit("Metallica");
  }, []);

  const onSearchSubmit = async (term) => {
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

    setVideos(response.data.items);
    setSeletected(response.data.items[0]);
  };

  const onVideoSelected = (video) => {
    setSeletected(video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onSearchSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideDetail video={selected} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelected={onVideoSelected} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
