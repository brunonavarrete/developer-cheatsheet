import React from 'react'
import data from './data'
import './App.css';

class App extends React.Component {
  state = {
    cards: data
  }

  render() {
    let renderCards = null
    renderCards = (
      <div className="CardList">
        { this.state.cards.map(c => {
          return (
            <div className="Card" key={ c.id }>
              <div className="Card__inner">
                <div className="Card__front">
                  <h2 className="Card__title">{ c.title }</h2>
                </div>
                <div className="Card__back">
                  <h2 className="Card__title">{ c.title }</h2>
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
