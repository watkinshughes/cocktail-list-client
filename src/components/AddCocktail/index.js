import React, { Component } from "react";
import axios from "axios";
import './styles.css'

class AddCocktail extends Component {
  state = {
    name: "",
    glass: "",
    category: "",
    garnish: "",
    preparation: "",
    ingredients: ""
  };

  handleChange = event => {
    this.setState({
      name: event.target.name,
      glass: event.target.name,
      category: event.target.name,
      garnish: event.target.name,
      preparation: event.target.name,
      ingredients: event.target.name
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post(`https://cocktail-list-api.herokuapp.com/cocktails/`, {
        name: this.state.name,
        glass: this.state.glass,
        category: this.state.category,
        garnish: this.state.garnish,
        preparation: this.state.preparation,
        ingredients: this.state.ingredients
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("An error occurred:", error);
      });
  };

  render() {
    return (
      <div>
        <form className="AddCocktail" onSubmit={this.handleSubmit}>
          <label>
            <div className="visually-hidden">Name</div>
            <input type="text" name="name" placeholder="Name" onChange={this.handleChange} />
          </label>
          <label>
            <div className="visually-hidden">Category</div>
              <select name="category" onChange={this.handleChange}>
                <option value="">Select Category</option>
                <option value="Before Dinner Cocktail">Before Dinner Cocktail</option>
                <option value="After Dinner Cocktail">After Dinner Cocktail</option>
                <option value="All Day Cocktail">All Day Cocktail</option>
                <option value="Longdrink">Longdrink</option>
              </select>
          </label>
          <label>
            <div className="visually-hidden">Glass</div>
            <select name="glass" onChange={this.handleChange}>
                <option value="">Select Glass</option>
                <option value="martini">Martini</option>
                <option value="old-fashioned">Old-fashioned</option>
                <option value="collins">Collins</option>
                <option value="highball">Highball</option>
                <option value="champagne">Champagne</option>
                <option value="margarita">Margarita</option>
              </select>
          </label>
          <label>
            <div className="visually-hidden">Garnish</div>
            <input type="text" placeholder="Garnish" name="granish" onChange={this.handleChange} />
          </label>
          <label>
            <div className="visually-hidden">Preparation</div>
            <textarea
              name="preparation"
              placeholder="Preparation"
              onChange={this.handleChange}
            />
          </label>
          <label>
            <div className="visually-hidden">Ingredients</div>
            <textarea
              name="ingredients"
              placeholder="Ingredients"
              onChange={this.handleChange}
            />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddCocktail;
