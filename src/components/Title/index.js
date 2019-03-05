import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import styles from "./styles.module.css";

class Title extends Component {
  render() {
    return (
      <h1 className={styles.title}>
        <Router>
          <Link className={styles.link} to="/">
            {this.props.copy}
          </Link>
        </Router>
      </h1>
    );
  }
}

export default Title;
