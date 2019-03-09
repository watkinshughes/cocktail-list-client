import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../Loading";
import CocktailList from "../CocktailList";

const Header = Loadable({
  loader: () => import("../Header"),
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
            <Header />
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
