import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styles from "./styles.module.css";

const GET_COCKTAIL_DETAILS = gql`
  query DrinksQuery($where: JSON) {
    cocktails(where: $where) {
      _id
      name
      ingredients
      preparation
      garnish
      category
    }
  }
`;

class CocktailDetails extends Component {
  render() {
    return (
      <Query
        query={GET_COCKTAIL_DETAILS}
        variables={{
          where: {
            id: this.props.match.params.id
          }
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error: ${error}`;
          return (
            <article className={styles.details}>
              <h1>{data.cocktails[0].name}</h1>
              <div className="display-linebreak">
                {data.cocktails[0].ingredients}
              </div>
              <p>{data.cocktails[0].preparation}</p>
              <p>{data.cocktails[0].garnish}</p>
              <h2>
                <em>{data.cocktails[0].category}</em>
              </h2>
              <Link to="/">← Back</Link>
            </article>
          );
        }}
      </Query>
    );
  }
}

export default CocktailDetails;
