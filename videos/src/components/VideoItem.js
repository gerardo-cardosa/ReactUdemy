import React from "react";

class VideoItem extends React.Component{

    onVideoClicked = () => {
        this.props.onVideoSelected( this.props.video);
    }

    render(){
        const {description, thumbnails, title} = this.props.video.snippet;
        return(
            <div onClick={ this.onVideoClicked }>
                <img src={thumbnails.default.url} alt={description} />
                <label>{ title }</label>
            </div>
        );
    };
}
export default VideoItem;