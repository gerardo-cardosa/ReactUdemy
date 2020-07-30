import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const KEY = "AIzaSyCZ15EH4BulbV90quTE_PQMZXNQD9eMMFo";

const useVideos = (defaultSearchTerm)=>{
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
      }, [defaultSearchTerm]);

    const search = async (term) => {
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
        
      };

    return [videos, search];
}

export default useVideos;