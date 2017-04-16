import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  constructor(props) {
    super(props);

    this.videoItems = [];
    this.refreshData(this.props);
  }

  refreshData(newProps) {
    console.log('在 video_list 中，newProps:', newProps);
    this.videoItems = newProps.videos.map((video) => {
      return (
        <VideoListItem 
          onVideoSelect={newProps.onVideoSelect}
          key={video.etag} 
          video={ video } />
      );
    });
    // console.log('videoItems', this.videoItems);
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

