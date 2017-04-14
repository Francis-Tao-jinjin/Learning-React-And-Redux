import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  constructor(props) {
    super(props);

    this.videoItems = [];
    this.refreshData(this.props);
  }

  refreshData(newProsp) {
    this.videoItems = newProsp.videos.map((video) => {
      return (
        <VideoListItem 
          onVideoClick={newProsp.onVideoClick}
          key={video.etag} 
          video={ video } />
      );
    });
    console.log('videoItems', this.videoItems);
  }

  componentWillReceiveProps(nextProos) {
    this.refreshData(nextProos);
  }

  render() {
    return (
      <ul className="col-md-4 list-group">
        {this.videoItems}
      </ul>
    );
  }
};

export default VideoList;

