import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

class Cocktail extends Component {
  render() {
    return (
      <article className={styles.cocktail}>
        <Link to={this.props.info.id}>
          <h1>{this.props.info.name}</h1>
        </Link>
      </article>
    );
  }
}

export default Cocktail;
