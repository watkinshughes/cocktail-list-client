import React, { Component } from "react";


class SearchBox extends Component {
  state = {
    data: {}
  };
  
  render() {
    return (
    <form>
      <fieldset>
        <label>
          <span className="visually-hidden">
            Filter by name or search by ingredient
          </span>
          <input
            type="text"
            className="Search"
            placeholder="Search by ingredient"
            onChange={this.filterList}
          />
        </label>
      </fieldset>
    </form>
    )
  }
}

export default SearchBox;