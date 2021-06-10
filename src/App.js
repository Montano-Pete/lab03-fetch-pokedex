import React, { Component } from 'react'
import request from 'superagent';
import './App.css';

export default class App extends Component {
  handleFetch = async () => {
    await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex')
  }
  render() {
    return (
      <div>
        <button onClick={this.handleFetch}>Fetch Pokedex!</button>
      </div>
    )
  }
}
