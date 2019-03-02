import React, {Component} from 'react';
import axios from 'axios';
import Cocktail from '../Cocktail';


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    const url = "https://raw.githubusercontent.com/watkinshughes/iba-cocktails/master/recipes.json";
    axios.get(url).then(response => {
      this.setState({
        data: response.data,
        loading: false
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
  componentDidMount() {
    this.fetchData();
  }
  render() {
    if (this.state.loading){
      return (
        <p>Loading...</p>
      )
    } else {
      return <section className="Cocktail-List">
        { this.buildRecursiveList(this.state.data)}
      </section>
    }
  }
}

export default List;