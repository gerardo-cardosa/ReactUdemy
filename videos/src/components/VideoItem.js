import './VideoItem.css';
import React from "react";

class VideoItem extends React.Component{

    onVideoClicked = () => {
        this.props.onVideoSelected( this.props.video);
    }

    render(){
        const {description, thumbnails, title} = this.props.video.snippet;
        return(
            <div className="video-item item" onClick={ this.onVideoClicked }>
                <img className="ui image" src={thumbnails.medium.url} alt={description} />
                <div className="content">
                    <div className="header">
                        {title}
                    </div>
                    {/* <div className="description">
                        {description}
                    </div> */}
                </div>
            </div>
        );
    };
}
export default VideoItem;