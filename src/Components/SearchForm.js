import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = { 
      filter: ''
    };
  }

  onChange(e) {    
    this.setState({ filter: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();  
    const photos = document.querySelector('.photos-block');
    console.log(photos.childNodes)  
  }

  render() {
    return (
      <div className="search-form__search">
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} className="search-form__search-input" type="search" name="search" placeholder="Search photos"/> 
          <input className="search-form__search-btn" type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}

export default SearchForm;

// function filter() {
//   var filterValue = document.querySelector('.filter__input');
//   var visibleTableElementsArrIndex = [];

//   if (filterValue.tagName === 'INPUT') {
//     tableElements.forEach = [].forEach;
//     tableElements.forEach(function(item, i) {
//       var regExp = new RegExp('^(' + filterValue.value + ')', 'i');

//       if (item.innerHTML.search(regExp) === -1) {
//         item.parentNode.hidden = true;
//       } else {
//         item.parentNode.hidden = false;
//         visibleTableElementsArrIndex.push(i);
//       }
//     });
//   }
// }