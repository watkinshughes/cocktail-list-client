import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

class CocktailDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      loading: true
    }
    this.fetchData = this.fetchData.bind(this);
  }
  
  fetchData() {
    const url = `https://cocktail-list-api.herokuapp.com/cocktails/${this.props.match.params.id}`;
    axios.get(url).then(response => {
      this.setState({
        data: response.data,
        loading: false
      });
    });
  }
  
  componentDidMount() {
    this.fetchData();
  }
  
  render() {
    if (this.state.loading){
      return (
        <p>Loading...</p>
      )
    } else {
    return (
        <div className="Cocktail-details">
          <h2>{ this.state.data.name }</h2>
          <div className="display-linebreak">
            { this.state.data.ingredients }
          </div>
          <p>
            { this.state.data.preparation }
          </p>
          <p>
            { this.state.data.garnish }
          </p>
          <h2>
            <em>{ this.state.data.category }</em>
          </h2>
          <Link to="/">← Back</Link>
        </div>
      )
    }
  }
}

export default CocktailDetails;