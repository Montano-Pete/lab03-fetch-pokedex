import React, { Component } from 'react'
import request from 'superagent';
import './App.css';
import PokeList from './PokeList.js';

export default class App extends Component {
  state = {
    pokedex: [],
    loading: false,
  }
  
  componentDidMount = async () => {
    this.setState({ loading: true });
    const dex = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex')

    this.setState({ loading: false });
    this.setState({ pokedex: dex.body.results });
  }


  fetchDex = async () => {
    this.setState({ loading: true });
    const dex = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex')

    this.setState({ loading: false });
    this.setState({ pokedex: dex.body.results });
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.fetchDex}>Fetch Pokedex!</button>
        {this.state.loading && <h1>LOADING!!!</h1>}
        <PokeList pokedex={this.state.pokedex}/>
      </div>
    )
  }
}
