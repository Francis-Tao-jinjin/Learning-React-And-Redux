import { FETCH_WEATHER } from '../actions';

export default function(state = [], action) {
  console.log('在 reducer_weather 中，action', action);
  switch(action.type) {
    case FETCH_WEATHER:
      // 不要在 reducer 中改变已有的 state，要通过生成新的的数据进行更新
      // return state.push(action.payload.data);
      return [ action.payload.data, ...state ];
      // 使用 concat 也是可以的
      // return state.concat([action.payload.data]);
  }
  return state;
}