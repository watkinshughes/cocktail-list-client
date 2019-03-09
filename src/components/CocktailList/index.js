import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Cocktail from "../Cocktail";
import styles from "./styles.module.css";

const GET_COCKTAIL_NAMES = gql`
  query DrinksQuery($sort: String, $where: JSON) {
    cocktails(sort: $sort, where: $where) {
      _id
      name
      ingredients
    }
  }
`;


class CocktailList extends Component {
  state = {
    data: {
      cocktails: []
    }
  };

  filterList = event => {
    const typedWord = event.target.value
    this.setState({
      data: {
        // ingredients_contains: typedWord,
        name_contains: typedWord
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
                placeholder="Filter by name or search by ingredient"
                onChange={this.filterList}
              />
            </label>
          </fieldset>
        </form>
        <Query
            query={GET_COCKTAIL_NAMES}
            variables={{
              sort: "name: ASC",
              where: {
                name_contains: this.state.data.name_contains,
                ingredients_contains: this.state.data.ingredients_contains
              }
            }}
          >
          
          {({ loading, error, data }) => {
            if (loading) return null;
            if (error) return `Error: ${error}`;
            return (
              <div>
                {data.cocktails.map(({ name, _id, ingredients }) => {
                  return (
                    <Cocktail
                      key={_id}
                      id={_id}
                      name={name}
                      ingredients={ingredients}
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
