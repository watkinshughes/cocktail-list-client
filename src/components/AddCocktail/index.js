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
            <div className="visually-hidden">Name</div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            <div className="visually-hidden">Category</div>
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
            <div className="visually-hidden">Glass</div>
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
            <div className="visually-hidden">Garnish</div>
            <input
              type="text"
              placeholder="Garnish"
              name="granish"
              onChange={this.handleGarnishChange}
            />
          </label>
          <label>
            <div className="visually-hidden">Preparation</div>
            <textarea
              name="preparation"
              placeholder="Preparation"
              onChange={this.handlePreparationChange}
            />
          </label>
          <label>
            <div className="visually-hidden">Ingredients</div>
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
