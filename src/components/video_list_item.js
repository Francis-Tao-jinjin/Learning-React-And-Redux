import React, { Component } from 'react';

class VideoListItem extends Component {
  constructor(props) {
    super(props);

    this.imageUrl = '';
    this.title = '';
    this.refreshData(this.props);
  }

  refreshData(newProps) {
    this.imageUrl = newProps.video.snippet.thumbnails.default.url;
    this.title = newProps.video.snippet.title;
  }

  componentWillReceiveProps(nextProps) {
    this.refreshData(nextProps);
  }

  render() {
    return (
      <li className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={this.imageUrl}/>
          </div>

          <div className="media-body">
            <div className="media-heading">
              {this.title}
            </div>
          </div>
        </div>
        {/*{this.props.video.snippet.title}*/}
      </li>
    );
    // return <li>Video</li>;
  }
};

export default VideoListItem;
