import React, { Component } from "react";
import "./styles.css";

class Title extends Component {
  render() {
    return <h1 className="Title">{this.props.copy}</h1>;
  }
}

export default Title;
