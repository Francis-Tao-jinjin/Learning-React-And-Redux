import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {/*不加 this.props.children 的话，字路由的组件找不到要渲染的元素*/}
        {this.props.children}
      </div>
    );
  }
}
