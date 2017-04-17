import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions'

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }; 

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    // console.log(event.target.value);
    const term = event.target.value;
    this.setState({
      term
    });
  }
  
  onFormSubmit(event) {
    // 对于 form 元素，要记得阻止他的默认行为 submit。
    event.preventDefault();
    if (!this.state.term) {
      console.log('输入内容为空');
      return;
    }
    this.props.fetchWeather(this.state.term);
    this.setState({
      term: ''
    });
  }

  render() {
    return (
      // 对于 form 元素，要记得阻止他的默认行为 submit。
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather: fetchWeather}, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);
// export default SearchBar;