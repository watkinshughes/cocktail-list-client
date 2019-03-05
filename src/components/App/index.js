import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Loadable from "react-loadable";
import Title from "../Title";
import Loading from "../Loading";
import styles from "./styles.module.css";

const CocktailList = Loadable({
  loader: () => import("../CocktailList"),
  loading: Loading
});

const CocktailDetails = Loadable({
  loader: () => import("../CocktailDetails"),
  loading: Loading
});

const AddCocktail = Loadable({
  loader: () => import("../AddCocktail"),
  loading: Loading
});

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
