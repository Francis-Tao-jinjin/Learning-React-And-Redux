import React, { Component } from 'react';
// 导入 connect 函数
import { connect } from 'react-redux';
import { selectBook } from '../actions';
import { bindActionCreators } from 'redux';

// 如果某个组件关注于某个状态时，应该把他变成 container 
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    onClick={() => this.props.selectBook(book)}
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// 如果 state 发生了变化，那么下面的函数会重新运行，从而更新 props
// 特殊的能得到 props 的函数
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    // 这里的 state 就是在 redux 中的 state
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed
    // to all of our reducers 
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

// 转换成 container 导出
// connect 接收若干函数，返回一个函数，再接收以一个 component
export default connect(mapStateToProps, mapDispatchToProps)(BookList);