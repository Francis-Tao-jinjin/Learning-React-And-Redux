# JSX
在创建一个 react component 的时候，通常可以分为两个步骤：
1. Create a new component. This component should produce some html
2. Take this component's generated HTML and put it on the page (in the DOM)
## 第一步 å
具体到代码中，第一步可以简单的写成：
```js
const App = function() {
  return <div>Hi!</div>;
}
```
需要注意的是，return 语句后面接的返回值就是 JSX 语法。而上述代码在经过 Babel 转译后变成：
```js
"use strict";

var App = function App() {
  return React.createElement(
    "div",
    null,
    "Hi!"
  );
};
```
也就是说，JSX 最终是需要调用 React.createElement 函数生成 DOM 元素。
如果换成稍微复杂一点的代码：
```js
const App = function() {
  return <div>
          Hi!
          <p>
            This is a p Tag
            <input type="text" />
          </p>
        </div>;
}ReactDOM.render(App);
```
对应的 es5 代码：
```js
"use strict";

var App = function App() {
  return React.createElement(
    "div",
    null,
    "Hi!",
    React.createElement(
      "p",
      null,
      "This is a p Tag",
      React.createElement("input", { type: "text" })
    )
  );
};
```
可以看出，如果纯粹使用 es5 编写 template 的话，将会非常复杂，稍微层级关系多一些的 Template，就要写一堆 js 代码，而且参数非常冗余，层级关系也明显。这是 react 使用 JSX 作为模版语言的原因。

## 第二步 ß
再来看回上面的代码，我们声明的一个类，并使用 App 指向它，但是负责页面渲染的 ReactDOM 并不能直接根据类渲染渲染出页面，而是需要接收一个类的实例。因此像下面那样写是错误的：
```js
ReactDOM.render(App);
```
会直接抛出错误
```
❌ ReactDOM.render(): Invalid component element. Instead of passing a component class, make sure to instantiate it by passing it to React.createElement.
```
仔细分析一下抛出的错误，提示需要将其放进 `React.createElement` 中生成一个实例。而这个 `React.createElement` 正是之前在 babel 里面将 JSX 转译出来看到的函数。因此，要生成实例，只需要简单的写成 JSX 即可。
```js
ReactDOM.render(<App />);
```
但是浏览器还抛出了另一个错误：
```
❌ _registerComponent(...): Target container is not a DOM element.
```
上面的错误指出 ReactDOM 并不知道将 template 渲染到页面的哪个位置。所以要在最外层的 index.html 创建一个 id 为 app 的标签（使用 className 也可以，但只有第一目标元素会有效），并用这个标签作为整个应用渲染的根。
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/style/style.css">
    <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/48938155eb24b4ccdde09426066869504c6dab3c/dist/css/bootstrap.min.css">
    <script src="https://maps.googleapis.com/maps/api/js"></script>
  </head>
  <body>
    <div class="container" id="app"></div>
  </body>
  <script src="/bundle.js"></script>
</html>
```
```js
ReactDOM.render(<App />, document.querySelector('#app'));
```
