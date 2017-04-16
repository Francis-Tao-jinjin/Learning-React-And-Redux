import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />;
// }

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    let term = event.target.value;
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input onChange={ this.onInputChange }/>
      </div>
    );
  }
}

export default SearchBar;
