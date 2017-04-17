import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  // 因为 activeBook 的初始值为 null，所以不能直接渲染，要先做检查
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>{this.props.book.title}</div>
        <div>{this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);