import React from "react";

class VideoItem extends React.Component{

    render(){
        const {description, thumbnails, title} = this.props.video.snippet;
        return(
            <div>
                <img src={thumbnails.default.url} alt={description} />
                <label>{ title }</label>
            </div>
        );
    };
}
export default VideoItem;