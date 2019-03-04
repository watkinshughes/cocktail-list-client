import React, { Component } from "react";
import styles from "./styles.module.css";

class Title extends Component {
  render() {
    return <h1 className={styles.title}>{this.props.copy}</h1>;
  }
}

export default Title;
