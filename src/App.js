import React from 'react'
import data from './data'
import classes from "./app.module.css";
import Card from './Card/Card';

class App extends React.Component {
  state = {
    cards: data
  }

  render() {
    let renderCards = null
    renderCards = (
      <div className={ classes.CardList }>
        { this.state.cards.map(c => {
          return (
            <Card id={ c.id } title={ c.title } />
          )
        })}
      </div>
    )

    return (
      renderCards 
    )
  }
}

export default App;
