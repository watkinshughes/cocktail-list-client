import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styles from "./styles.module.css";

const GET_COCKTAIL_DETAILS = gql`
  query($id: ID) {
    cocktail(where: { id: $id }) {
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
`;

class CocktailDetails extends Component {
  render() {
    return (
      <Query
        query={GET_COCKTAIL_DETAILS}
        variables={{
          id: this.props.match.params.id
        }}
      >
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error: ${error}`;
          return (
            <article className={styles.details}>
              <h1>{data.cocktail.name}</h1>
              <div className="display-linebreak">
                {data.cocktail.ingredients}
              </div>
              <p>{data.cocktail.preparation}</p>
              <p>{data.cocktail.garnish}</p>
              <h2>
                <em>{data.cocktail.category}</em>
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
