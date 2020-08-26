import React from 'react'
import data from './data'
import Cards from './components/Cards/Cards';

class App extends React.Component {
  state = {
    cards: data
  }
  render() {
    return (
      <Cards cards={ this.state.cards } />
    )
  }
}

export default App;
