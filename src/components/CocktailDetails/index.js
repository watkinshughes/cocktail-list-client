import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./styles.module.css";

class CocktailDetails extends Component {
  state = {
    data: {},
    loading: true
  };

  fetchData = () => {
    const url = `https://cocktail-list-api.herokuapp.com/cocktails/${
      this.props.match.params.id
    }`;
    axios.get(url).then(response => {
      this.setState({
        data: response.data,
        loading: false
      });
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <article className={styles.details}>
        <h1>{this.state.data.name}</h1>
        <div className="display-linebreak">{this.state.data.ingredients}</div>
        <p>{this.state.data.preparation}</p>
        <p>{this.state.data.garnish}</p>
        <h2>
          <em>{this.state.data.category}</em>
        </h2>
        <Link to="/">← Back</Link>
      </article>
    );
  }
}

export default CocktailDetails;
