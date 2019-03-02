import React, {Component} from 'react';
import './styles.css';

class Cocktail extends Component {

  render() {
    return <article class="Cocktail">
        <h1>
            { this.props.info.name }
        </h1>
        <h2>
          { this.props.info.category }
        </h2>
        <ul>{this.props.info.ingredients.map(ingredient => {
          if (ingredient.special) {
            return <li>{ingredient.special }</li>
          } else {
            return (
              <li>
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
      </article>
  }
}

export default Cocktail;