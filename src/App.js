import React from 'react'
import data from './data'
import classes from "./app.module.css";

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
            <div className={ classes.Card } key={ c.id }>
              <div className={ classes.Card__inner }>
                <div className={ classes.Card__front }>
                  <h2 className={ classes.Card__title }>{ c.title }</h2>
                </div>
                <div className={ classes.Card__back }>
                  <h2 className={ classes.Card__title }>{ c.title }</h2>
                </div>
              </div>
            </div>
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
