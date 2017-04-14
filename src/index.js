import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
    
    YTSearch({key: API_KEY, term: 'surboards'}, (videos) => {
      console.log('search result', videos);
      this.setState({
        videos,
        selectedVideo: videos[0]
      }, () => { 
        console.log('this.state', this.state);
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Hi! Thomas</h2>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectVideo => this.setState({selectVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

// const App = () => {
//   // 对于多行 JSX，用小括号将其扩起来
//   return (
//     <div>
//       <h2>Hi! Thomas</h2>
//       <SearchBar />
//     </div>
//   );
// }

ReactDOM.render(<App />, document.querySelector('.container'));
