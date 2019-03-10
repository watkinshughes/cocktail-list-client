import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Cocktail from "../Cocktail";
import styles from "./styles.module.css";

const GET_COCKTAIL_NAMES = gql`
  query content($first: Int, $skip: Int, $ingredients_contains: String) {
    cocktails: cocktailsConnection(
      orderBy: name_ASC
      first: $first
      skip: $skip
      where: { ingredients_contains: $ingredients_contains }
    ) {
      edges {
        node {
          status
          updatedAt
          createdAt
          id
          name
          glass
          category
          garnish
          preparation
          ingredients
          image {
            status
            updatedAt
            createdAt
            id
            handle
            fileName
            height
            width
            size
            mimeType
          }
        }
      }
    }
  }
`;

class CocktailList extends Component {
  state = {
    data: {}
  };

  filterList = event => {
    const typedWord = event.target.value;
    this.setState({
      data: {
        ingredients_contains: typedWord
      }
    });
  };

  render() {
    return (
      <section className={styles.list}>
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
        <Query
          query={GET_COCKTAIL_NAMES}
          variables={{
            ingredients_contains: this.state.data.ingredients_contains
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return `Error: ${error}`;
            return (
              <div>
                {data.cocktails.edges.map(({ node }) => {
                  return (
                    <Cocktail
                      key={node.id}
                      id={node.id}
                      name={node.name}
                      ingredients={node.ingredients}
                    />
                  );
                })}
              </div>
            );
          }}
        </Query>
      </section>
    );
  }
}

export default CocktailList;
