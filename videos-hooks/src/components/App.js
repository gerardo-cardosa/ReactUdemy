import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";


const App = () => {
  
  const [selected, setSeletected] = useState(null);
  const [videos, search] = useVideos('Metallica');

  useEffect(()=>{
    setSeletected(videos[0]);
  },[videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideDetail video={selected} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelected={setSeletected} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
