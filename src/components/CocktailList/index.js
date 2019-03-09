import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Cocktail from "../Cocktail";
import styles from "./styles.module.css";


let query = gql`{
  cocktails(sort: "name:ASC", where:{
    ingredients_contains: "Vodka"
  }) {
    name
    _id
    ingredients
  }
}
`

class CocktailList extends Component {

  render() {
    return (
      <Query query={query}>
      {({ loading, error, data, refetch }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error ;-p</p>;
      return(
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
                  onChange={() => refetch()}
                />
              </label>
            </fieldset>
          </form>
          { data.cocktails.map(({ name, _id, ingredients }) => {
              return <Cocktail key={_id} id={_id} name={name} ingredients={ingredients}/>
          })}
        </section>
      );
    }}
    </Query>
  )
}}

export default CocktailList;