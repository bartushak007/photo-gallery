import React, { Component } from "react";
import { connect } from "react-redux";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      filter: ""
    };
  }

  onChange(e) {
    this.setState({ filter: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const photos = document.querySelector(".photos-block").childNodes;
    const filter = this.state.filter;
    const regExp = new RegExp(`(${filter})`, "i");

    this.props.photos.forEach((e, i) => {
      const title = e.title;

      const hasHashtag = e.hashtagArr.some(e => {        
        return e.search(filter) !== -1;        
      });

      if (title.search(regExp) !== -1 || hasHashtag) {
        photos[i].classList.remove("photos-block__photo-container--hidden");
      } else {
        photos[i].classList.add("photos-block__photo-container--hidden");
      }
    });
  }

  render() {
    return (
      <div className="search-form__search">
        <form onSubmit={this.onSubmit}>
          <input
            onChange={this.onChange}
            value={this.state.filter}
            className="search-form__search-input"
            type="search"
            name="search"
            placeholder="Search photos"
          />
          <input
            className="search-form__search-btn"
            type="submit"
            value="Search"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.gallery.photos
});

export default connect(mapStateToProps)(SearchForm);