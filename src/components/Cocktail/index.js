import React, {Component} from 'react';
import './styles.css';

class Cocktail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
  };
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }
  
  toggleExpanded() {
    const currentState = this.state.expanded;
    this.setState({
      expanded: !currentState
    });
  };

  render() {
    return <article className="Cocktail">
        <button onClick={this.toggleExpanded}>
          <h1>
            { this.props.info.name }
          </h1>
        </button>
        <div className={ `Cocktail-info ${ this.state.expanded ? 'expanded': '' }` }>
          <ul>{this.props.info.ingredients.map((ingredient, index) => {
            if (ingredient.special) {
              return <li key={ index }>{ingredient.special }</li>
            } else {
              return (
                <li key={ index }>
                  { ingredient.amount } { ingredient.unit } - { ingredient.ingredient }
                </li>
              )
            }
          })}
          </ul>
          <p>
            { this.props.info.preparation }
          </p>
          <p>
            { this.props.info.garnish }
          </p>
          <h2>
            <em>{ this.props.info.category }</em>
          </h2>
        </div>
      </article>
  }
}

export default Cocktail;