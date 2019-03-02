import React, { Component } from 'react';
import Title from '../Title';
import CocktailsList from '../CocktailsList';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title copy="Cocktails List"/>
        <CocktailsList />
      </div>
    );
  }
}

export default App;