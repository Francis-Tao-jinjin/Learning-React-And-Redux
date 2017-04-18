import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../components/app';
import PostsIndex from '../components/posts_index';
import PostsNew from '../components/posts_new';
import PostsShow from '../components/posts_show';

export default (
  // 路由匹配
  <Route path="/" component={App}>
    {/*// IndexRoute 可以看成是父路由的默认子路由*/}
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);



