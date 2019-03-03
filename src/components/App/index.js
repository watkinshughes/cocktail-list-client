import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Title from '../Title';
import CocktailsList from '../CocktailsList';
import CocktailDetails from '../CocktailDetails';
import './styles.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <Router>
          <div> 
            <Link to="/">
              <Title copy="Cocktail List"/>
            </Link>
            <Route exact path="/" component={ CocktailsList } />
            <Route path="/:id" component={ CocktailDetails } />
    

          </div>
        </Router>
      </div>
    );
  }
}

export default App;