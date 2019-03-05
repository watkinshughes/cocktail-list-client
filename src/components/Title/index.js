import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

class Title extends Component {
  render() {
    return (
      <h1 className={styles.title}>
        <Link to="/">{this.props.copy}</Link>
      </h1>
    );
  }
}

export default Title;
