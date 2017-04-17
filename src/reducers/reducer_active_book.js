// state 是相应的 reducer 使用的 state，不是 application 级别的 state
// 只有在 action 被触发的时候才会运行该函数
export default function(state=null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}