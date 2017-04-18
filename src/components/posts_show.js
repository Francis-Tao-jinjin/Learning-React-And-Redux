import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { fetchPost } from '../actions/index';
import { deletePost } from '../actions/index';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  
  componentWillMount() {
    console.log('inside componentWillMount');
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    console.log('在render中', this.props.post);
    if(!this.props.post) {
      return (
        <div>Loading...</div>
      );
    }
    const { post } = this.props;

    return (
      <div>
        <Link to="/">Back to index</Link>
        <button 
          onClick={this.onDeleteClick.bind(this)}
          className="btn btn-danger pull-xs-right">Delete Post</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost }, dispatch);
}

export default connect(mapStateToProps, { fetchPost: fetchPost, deletePost: deletePost })(PostsShow);