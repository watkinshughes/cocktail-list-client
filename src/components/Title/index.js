import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Title(props) {
  return (
    <h1 className={styles.title}>
      <Link className={styles.link} to="/">
        {props.copy}
      </Link>
    </h1>
  );
}
