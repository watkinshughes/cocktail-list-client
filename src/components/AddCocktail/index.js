import React, { Component, Fragment } from "react";
import axios from "axios";
import styles from "./styles.module.css";

class AddCocktail extends Component {
  state = {
    name: "",
    glass: "",
    category: "",
    garnish: "",
    preparation: "",
    ingredients: ""
  };

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleGlassChange = event => {
    this.setState({
      glass: event.target.value
    });
  };

  handleCategoryChange = event => {
    this.setState({
      category: event.target.value
    });
  };

  handleGarnishChange = event => {
    this.setState({
      garnish: event.target.value
    });
  };

  handlePreparationChange = event => {
    this.setState({
      preparation: event.target.value
    });
  };

  handleIngredientsChange = event => {
    this.setState({
      ingredients: event.target.value
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
        this.props.history.push("/");
      })
      .catch(error => {
        console.log("An error occurred:", error);
      });
  };

  render() {
    return (
      <Fragment>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label>
            <span className="visually-hidden">Name</span>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            <span className="visually-hidden">Category</span>
            <select name="category" onChange={this.handleCategoryChange}>
              <option value="">Select Category</option>
              <option value="Before Dinner Cocktail">
                Before Dinner Cocktail
              </option>
              <option value="After Dinner Cocktail">
                After Dinner Cocktail
              </option>
              <option value="All Day Cocktail">All Day Cocktail</option>
              <option value="Longdrink">Longdrink</option>
            </select>
          </label>
          <label>
            <span className="visually-hidden">Glass</span>
            <select name="glass" onChange={this.handleGlassChange}>
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
            <span className="visually-hidden">Garnish</span>
            <input
              type="text"
              placeholder="Garnish"
              name="granish"
              onChange={this.handleGarnishChange}
            />
          </label>
          <label>
            <span className="visually-hidden">Preparation</span>
            <textarea
              name="preparation"
              placeholder="Preparation"
              onChange={this.handlePreparationChange}
            />
          </label>
          <label>
            <span className="visually-hidden">Ingredients</span>
            <textarea
              name="ingredients"
              placeholder="Ingredients"
              onChange={this.handleIngredientsChange}
            />
          </label>
          <div>
            <button className={styles.button} type="submit">
              Submit
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default AddCocktail;
