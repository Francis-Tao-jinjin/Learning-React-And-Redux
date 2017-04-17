import React, {Component} from 'react';

class GoogleMap extends Component {
  
  componentDidMount() {
    console.log('componentDidMount');
    // 设置要显示地图的元素
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // 设置 ref, 这样在嗲吗中可以通过 this.refs.map 访问该元素
    return <div ref="map" />
  }
}

export default GoogleMap;