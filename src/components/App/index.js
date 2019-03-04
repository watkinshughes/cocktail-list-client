import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Title from "../Title";
import CocktailList from "../CocktailList";
import AddCocktail from "../AddCocktail";
import CocktailDetails from "../CocktailDetails";
import styles from "./styles.module.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Fragment>
            <header>
              <Link to="/">
                <Title copy="Cocktail List" />
              </Link>
              <Link className={styles.menu} to="/add-cocktail">
                Add cocktail
              </Link>
            </header>
            <Switch>
              <Route exact path="/" component={CocktailList} />
              <Route path="/add-cocktail" component={AddCocktail} />
              <Route path="/:id" component={CocktailDetails} />
            </Switch>
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}

export default App;
