import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    // 正是因为 reduxForm 有 connect 的功能，这里才能用 this.props 访问 createPost
    console.log('inside onSubmit', props);
    this.props.createPost(props)
      .then(() => {
        console.log('在 then 函数中');
        // 跳转到主页
        this.context.router.push('/');
      });
  }

  render() {
    // 这些是由 redux-form 往 props 中注入的
    // fields 中得到的属性已经不再是单纯的变量，
    // 全部都被赋予了许多属性和方法，通过 ... 操作符将这些属性、方法都
    // 挂载到表单元素上
    const { 
      fields: { title, categories, content },
      handleSubmit 
    } = this.props;

    console.log('fields.title', title);
    // 表单验证中三个常用的属性：touched, invalid, error
    return (
      // handleSubmit 接收一个 actionCreator，并把所有的数据都传经 actionCreator
      // <form onSubmit={handleSubmit(this.props.createPost)}>
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>
          {/*借助 title.touch 和 title.invalid 属性判断是否要添加 has-danger 类名*/}
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter a username';
  }
  if (!values.categories) {
    errors.categories = 'Enter a categories';
  }
  if (!values.content) {
    errors.content = 'Enter a content';
  }

  return errors;
}

// reduxForm 有着和 redux.connect 高度相似的功能：
// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps,3rnd is mapDispatchToProps

export default reduxForm({
  // reduxForm 的配置信息
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);

// reduxForm 将组建级的 state 转换成了 redux 级的 state
// state: {
//   form: {
//     PostsNewForm: {
//       title: '....',
//       categories: '....',
//       content: '....'
//     }
//   }
// }


