import React, { Component } from 'react';
import Title from '../Title';
import List from '../List';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title copy="IBA Cocktails List"/>
        <List />
      </div>
    );
  }
}

export default App;