import React, { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import styles from "./styles.module.css";

const ADD_COCKTAIL = gql`
  mutation CreateNewCocktail(
    $name: String!
    $ingredients: String!
    $glass: String
    $garnish: String
    $category: String
    $preparation: String
  ) {
    createCocktail(
      input: {
        data: {
          name: $name
          ingredients: $ingredients
          glass: $glass
          garnish: $garnish
          category: $category
          preparation: $preparation
        }
      }
    ) {
      cocktail {
        name
        ingredients
        glass
        garnish
        category
        preparation
      }
    }
  }
`;

class AddCocktail extends Component {
  render() {
    return (
      <Mutation
        mutation={ADD_COCKTAIL}
        variables={{
          name: "test",
          ingredients: "test",
          glass: "test",
          garnish: "test",
          category: "test",
          preparation: "test"
        }}
      >
        {createCocktail => {
          debugger;
          return (
            <form className={styles.form} onSubmit={createCocktail}>
              <label>
                <span className="visually-hidden">Name</span>
                <input type="text" name="name" placeholder="Name" />
              </label>
              <div>
                <button className={styles.button} type="submit">
                  Submit
                </button>
              </div>
            </form>
          );
        }}
      </Mutation>
    );
  }
}

export default AddCocktail;
