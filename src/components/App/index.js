import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header";
import CocktailList from "../CocktailList";
import CocktailDetails from "../CocktailDetails";
import AddCocktail from "../AddCocktail";

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
