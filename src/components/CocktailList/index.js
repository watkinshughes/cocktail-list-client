import React, { Component } from "react";
import axios from "axios";
import Cocktail from "../Cocktail";
import styles from "./styles.module.css";

class CocktailList extends Component {
  state = {
    initialData: [],
    data: [],
    loading: true
  };

  sortData = data => {
    return data.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };

  fetchData = () => {
    const url = "https://cocktail-list-api.herokuapp.com/cocktails";
    axios.get(url).then(response => {
      this.setState({
        data: this.sortData(response.data),
        initialData: this.sortData(response.data),
        loading: false
      });
    });
  };

  buildCocktailsList = data => {
    return data.map(node => {
      return (
        <Cocktail key={node.name} info={node}>
          {node.children}
        </Cocktail>
      );
    });
  };

  filterList = event => {
    let updatedList = this.state.initialData;
    updatedList = updatedList.filter(
      node =>
        node.name.toLowerCase().search(event.target.value.toLowerCase()) !==
          -1 ||
        node.ingredients
          .toLowerCase()
          .search(event.target.value.toLowerCase()) !== -1
    );
    this.setState({
      data: updatedList
    });
  };

  componentDidMount() {
    this.fetchData();
    this.setState({
      data: this.state.initialData
    });
  }

  render() {
    return (
      <section className={styles.list}>
        <form>
          <fieldset>
            <label>
              <span className="visually-hidden">Filter by name or search by ingredient</span>
              <input
                type="text"
                className="Search"
                placeholder="Filter by name or search by ingredient"
                onChange={this.filterList}
              />
            </label>
          </fieldset>
        </form>
        {this.buildCocktailsList(this.state.data)}
      </section>
    );
  }
}

export default CocktailList;
