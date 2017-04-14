## 组件化
**第一条准则：**
一个文件，一个组件

组件可以使用一般的 JavaScript 函数声明（function component），也可以使用标准的 ES6 class 声明（class component），实际上，使用 class 是更推荐的方法，以为不会因为 function 产生歧义。
使用 class 声明 component 时，需要让改类拓展 React.Component 。而原先 return 的 JSX 代码，现在通过 render 函数返回。
```js
class SearchBar extends React.Component {
  render() {
    return <input />;
  }
}
```
## 事件处理 Event Handler
以输入框的事件处理为例。
```js
class SearchBar extends Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return <input onChange={ this.onInputChange }/>;
  }
}
```
## Downward Data Flow 从上至下的数据流





