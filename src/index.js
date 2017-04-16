import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// youtube data api v3
const API_KEY = 'AIzaSyBgQjzT6p_44j1tB9KHk2dPYcgY2mROJ7w';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null 
    };

    this.onSelecteVideo = this.onSelecteVideo.bind(this);
    this.videoSearch = this.videoSearch.bind(this);

    this.videoSearch('surfboards');
  }
  
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      console.log('search result', videos);
      this.setState({
        videos,
        selectedVideo: videos[0]
      }, () => { 
        console.log('this.state', this.state);
      });
    });
  }

  onSelecteVideo(selectedVideo) {
    console.log('确认选择的视频：', selectedVideo);
    this.setState({selectedVideo});
  }

  render() {
    // 使用 _.debounce 生成的函数 _videoSearch，最多只能每 300ms 调用一次
    const _videoSearch = _.debounce(this.videoSearch, 300);
    return (
      <div>
        {/*<h2>Hi! Thomas</h2>*/}
        <SearchBar onSearchTermChange={_videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={this.onSelecteVideo}
          videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
