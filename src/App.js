import React, { Component } from 'react'
import request from 'superagent';
import './App.css';
import PokeList from './PokeList.js';

export default class App extends Component {
  state = {
    pokedex: []
  }
  
  fetchDex = async () => {
    const dex = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex');

    this.setState({ pokedex: dex.body.results })

  }
  render() {
    return (
      <div className="App">
        <button onClick={this.fetchDex}>Fetch Pokedex!</button>
        <PokeList pokedex={this.state.pokedex}/>
      </div>
    )
  }
}
