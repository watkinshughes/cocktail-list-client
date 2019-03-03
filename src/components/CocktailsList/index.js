import React, {Component} from 'react';
import axios from 'axios';
import Cocktail from '../Cocktail';
import './styles.css';

class CocktailsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: [],
      data: [],
      loading: true
    };
    this.sortData = this.sortData.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.buildRecursiveList = this.buildRecursiveList.bind(this);
    this.filterList = this.filterList.bind(this);
  }
  sortData(data) {
    return data.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    });
  }
  fetchData() {
    const url = "https://cocktails-list-api.herokuapp.com/cocktails";
    axios.get(url).then(response => {
      this.setState({
        data: this.sortData(response.data),
        initialData: this.sortData(response.data),
        loading: false,
      });
    });
  }

  buildRecursiveList(data) {
    const children = (items) => {
      if (items) {
        return <ul className="Child">{ this.buildRecursiveList(items) }</ul>
      }
    }
    return data.map((node) => {
      return <Cocktail key={ node.name } info={ node } >
        { children(node.children) }
      </Cocktail>
    })
    
  }
  
  filterList(event) {
    let updatedList = this.state.initialData;
    updatedList = updatedList.filter(node => node.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1);
    this.setState({ 
      data: updatedList
    });
  }

  componentDidMount() {
    this.fetchData();
    this.setState({
      data: this.state.initialData
    })
  }
  
  render() {
    if (this.state.loading){
      return (
        <p>Loading...</p>
      )
    } else {
      return (
      <section className="Cocktails-list">
      <form>
        <fieldset>
          <input type="text" className="Search" placeholder="Filter by name" onChange={this.filterList} />
        </fieldset>
      </form>
        { this.buildRecursiveList(this.state.data)}
      </section>
      )}
  }
}

export default CocktailsList;