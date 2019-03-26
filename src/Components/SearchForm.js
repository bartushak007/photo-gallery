import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return (
      <div className="search-form__search">
        <form>
          <input className="search-form__search-input" type="search" name="search" placeholder="Search photos"/> 
          <input className="search-form__search-btn" type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}

export default SearchForm;