import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router';

class PostsIndex extends Component {

  componentWillMount() {
    // 这里可以当做是 Vue 的 created 函数，只有在第一次被渲染出来的时候会调用
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      console.log('post.id', post.id);
      return (
        <li
          className="list-group-item" 
          key={post.id}>
          <Link to={"posts/"+post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          {/*Link 就像 Vue.js 中的 router-link*/}
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-grout">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts }, dispatch);
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex);
// export default connect(null, mapDispatchToProps)(PostsIndex);