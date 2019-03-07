import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Cocktail from "../Cocktail";
import styles from "./styles.module.css";

class CocktailList extends Component {
  state = {
    initialData: [],
    data: [],
    loading: true
  };

  filterList = event => {
    let updatedList = this.state.initialData;
    let typedWord = new RegExp(`\\b${event.target.value.toLowerCase()}\\b`);
    updatedList = updatedList.filter(
      node =>
        node.name.toLowerCase().search(typedWord) !== -1 ||
        node.ingredients.toLowerCase().search(typedWord) !== -1
    );
    this.setState({
      data: updatedList
    });
  };

  componentDidMount() {
    this.setState({
      data: this.state.initialData
    });
  }

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
          query={gql`
            {
              cocktails(sort: "name:ASC") {
                name
                _id
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return data.cocktails.map(({ name, _id }) => (
              <Cocktail key={_id} id={_id} name={name} />
            ));
          }}
        </Query>
      </section>
    );
  }
}

export default CocktailList;
