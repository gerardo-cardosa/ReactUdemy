import React from "react";
import VideoItem from './VideoItem';

class VideoList extends React.Component{

    onVideoSelected = (video) => {
        this.props.onVideoSelected(video);
    }

    render(){
        const videos = this.props.videos.map( video => {
            return <VideoItem key={ video.etag} video={video} onVideoSelected={ this.onVideoSelected }/>
        });

        return <div className="" >{ videos }</div>
    };
}

export default VideoList;