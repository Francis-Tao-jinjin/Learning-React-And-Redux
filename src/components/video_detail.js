import React, { Component } from 'react';

class VideoDetail extends Component {
  constructor(props) {
    super(props);

    this.videoId = '';
    this.videoUrl = '';
    this.title = '';
    this.description = '';
    this.refreshData(this.props);
  }

  refreshData(newProps) {
    if (!newProps.video) {
      return;
    }
    console.log('inside video_detail:', newProps);
    this.videoId = newProps.video.id.videoId;
    this.videoUrl = 'https://www.youtube.com/embed/' + this.videoId;
    // this.videoUrl = `https://www.youtube.com/embed/${this.videoId}`;
    console.log('this.videoUrl', this.videoUrl);
    this.title = newProps.video.snippet.title;
    this.description = newProps.video.snippet.description;
  }

  componentWillReceiveProps(nextProps) {
    console.log('👍 inside componentWillReceiveProps');
    console.log('nextProps', nextProps);
    this.refreshData(nextProps);
  }
  
  render() {
    if (!this.props.video) {
      return <div>Loading...</div>;
    }
    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={this.videoUrl}></iframe>
        </div>

        <div className="details">
          <div>{this.title}</div>
          <div>{this.description}</div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;