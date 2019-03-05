import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "../Title";
import styles from "./styles.module.css";

class Header extends Component {
  render() {
    return (
      <header>
        <Title copy="Cocktail List" />
        <Link className={styles.menu} to="/add-cocktail">
          Add cocktail
        </Link>
      </header>
    );
  }
}

export default Header;
