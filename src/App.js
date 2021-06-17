import React, { Component } from 'react'
import request from 'superagent';
import './App.css';
import PokeList from './PokeList.js';
import LoadPause from './LoadPause.js';
import Dropdown from './Dropdown.js';

const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))

export default class App extends Component {
  state = {
    pokedex: [],
    loading: false,
    query: '',
    direction: 'asc',
  }
  
  componentDidMount = async () => {
    await this.getData();
  }
  
  handleDex = async () => {
    await this.getData();
  }

  handleDirection = async (e) => {
    this.setState({ direction: e.target.value });
    this.getData();
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value});
  }

  getData = async () => {
    this.setState({ loading: true });

    const pokeNameReq = request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&direction=${this.state.direction}`)
    const pokeTypeReq = request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${this.state.query}&direction=${this.state.direction}`)

    const responses = await Promise.all([pokeNameReq, pokeTypeReq])
    const results = responses.map(res => res.body.results).flat()

    await sleep(2000)

    this.setState({ loading: false });
    this.setState({ pokedex: results });
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange} placeholder="Search here!"  />
        <Dropdown
            sort={this.handleDirection}
        />
        <button onClick={this.handleDex}>Search Pokedex!</button>
        {this.state.loading
            ? <LoadPause />
            : <PokeList pokedex={this.state.pokedex}/>
        }
      </div>
    )
  }
}
