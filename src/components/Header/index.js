import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Title from "../Title";
import styles from "./styles.module.css";

class Header extends Component {
  render() {
    return (
      <header>
        <Router>
          <Fragment>
            <Title copy="Cocktail List" />
            <Link className={styles.menu} to="/add-cocktail">
              Add cocktail
            </Link>
          </Fragment>
        </Router>
      </header>
    );
  }
}

export default Header;
