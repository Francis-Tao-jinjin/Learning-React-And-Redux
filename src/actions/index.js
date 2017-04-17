import axios from 'axios';

const API_KEY = 'eb533e280a5b9fd3fd9e9c7657d37d39';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},cn`;

  // 得到的 request 是 promise 对象
  const request = axios.get(url);
  // 如果 payload 是 promise，redux-promise 中间键会对其进行拦截，
  // 等待 promise 的 resolve，并生成一个新的 action 再将其发送到 reducer
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}