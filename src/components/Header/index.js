import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Title from "../Title";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header>
      <Fragment>
        <Title copy="Cocktail List" />
        <Link className={styles.menu} to="/add-cocktail">
          Add cocktail
        </Link>
      </Fragment>
    </header>
  );
}
