import React from 'react';

// Coponents to serch for data

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search </label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
