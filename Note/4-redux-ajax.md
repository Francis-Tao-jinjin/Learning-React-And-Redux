## Redux Ajax
这一部分是完全使用 Redux 完成 Ajax 的 demo。
在分析组件的时候，如果有某个组件需要使用 action 对 state 进行更改，那么应该将其包装成 container，
如果只是纯粹的一个接收数据，展示数据的组件，就可以使用 component。
这一部分会引入一个新的概念：Middleware 中间键，中间键会劫持
action，对它进行操作，能让action通过也能对其进行拦截。

使用 axios 进行 ajax。