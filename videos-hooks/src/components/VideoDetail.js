import React from "react";

class VideDetail extends React.Component {
  render() {
    if (!this.props.video) {
      return <div>Loading...</div>;
    }

    const video = this.props.video;
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?&autoplay=1`;
    return (
      <div>
        <div className="ui embed">
          <iframe
            title="videoPlayer"
            width="560"
            height="315"
            src={videoSrc}
          ></iframe>
        </div>

        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}

export default VideDetail;
