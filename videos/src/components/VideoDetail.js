import React from "react";

class VideDetail extends React.Component{

    render(){
        if(this.props.video){
            const video = this.props.video.id.videoId;
            return (
                <div>
                    <iframe width="560" height="315" src={ `https://www.youtube.com/embed/${video}?&autoplay=1"` } 
                    frameBorder="0"  allowFullscreen></iframe>
                </div>
            );
        }
        else {
            return <div></div>
        }
    };
}

export default VideDetail;