import React from "react";
import VideoItem from './VideoItem';

class VideoList extends React.Component{

    render(){
        const videosList = this.props.videos.map( video => {
            return <VideoItem key={ video.id.videoId } video={video} onVideoSelected={ this.props.onVideoSelected }/>
        });

        return <div className="ui relaxed divided list" >{ videosList }</div>
    };
}

export default VideoList;