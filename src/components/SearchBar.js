import React from 'react';

// Coponents to serch for data

class SearchBar extends React.Component {
  state = { term: '' };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search </label>
            <input
              type="text"
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
