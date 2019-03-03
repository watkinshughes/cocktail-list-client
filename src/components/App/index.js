import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Title from '../Title';
import CocktailsList from '../CocktailsList';
import CocktailDetails from '../CocktailDetails';
import './styles.css';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <Title copy="Cocktails List"/>
      <Router>
          <div> 
            <Route exact path="/" component={ CocktailsList } />
            <Route path="/about" component={ CocktailDetails } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;