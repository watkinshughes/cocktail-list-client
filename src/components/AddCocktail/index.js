import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import styles from "./styles.module.css";

const CREATE_COCKTAIL = gql`
  mutation($name: String!,  $ingredients: String!, $glass: String!, $garnish: String, $category: String, $preparation: String!) {
    createCocktail(
      data: {
        status: PUBLISHED
        name: $name
        ingredients: $ingredients
        glass: $glass
        garnish: $garnish
        category: $category
        preparation: $preparation
      }
    ) {
      name
      ingredients
      glass
      garnish
      category
      preparation
    }
  }
`;

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

  render() {
    return (
      <Mutation
        mutation={CREATE_COCKTAIL}
        variables={{
          name: this.state.name,
          ingredients: this.state.ingredients,
          glass: this.state.glass,
          garnish: this.state.garnish,
          category: this.state.category,
          preparation: this.state.preparation
        }}
        onCompleted={() => {
          this.props.history.push("/");
        }}
      >
        {(createCocktail, { loading, error }) => {
          if (loading) return null;
          if (error) return `Error: ${error}`;
          return (
            <form className={styles.form} onSubmit={createCocktail}>
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
                  <option value="Sparkling Cocktail">Sparkling Cocktail</option>
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
              <button className={styles.button} type="submit">
                Submit
              </button>
            </form>
          );
        }}
      </Mutation>
    );
  }
}

export default AddCocktail;
