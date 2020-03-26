import React from 'react';

// Coponents to serch for data

class SearchBar extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search </label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
