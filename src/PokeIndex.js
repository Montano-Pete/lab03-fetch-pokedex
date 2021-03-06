import React, { Component } from 'react'
import request from 'superagent';
import PokeList from './PokeList.js';
import LoadPause from './LoadPause.js';
import Dropdown from './Dropdown.js';

const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))

export default class PokeIndex extends Component {
    state = {
        pokedex: [],
        loading: false,
        query: '',
        direction: 'asc',
        page: 1
      }

      componentDidMount = async () => {
        await this.getData();
      }
      
      handleDex = async () => {
        await this.getData();
      }
    
      handleDirection = async (e) => {
        await this.setState({ direction: e.target.value });
        this.getData();
      }

      handlePage = async (e) => {
        await this.setState({ page: this.state.page + 1 });
        this.getData();
    }
    
      handlePreviousPage = async (e) => {
        await this.setState({ page: this.state.page - 1 });
        this.getData();
    }
    
      handleChange = (e) => {
        this.setState({ query: e.target.value});
      }
    
      getData = async () => {
        this.setState({ loading: true });
    
        const pokeNameReq = request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.direction}&page=${this.state.page}`)
    
    
        const pokeTypeReq = request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${this.state.query}&sort=pokemon&direction=${this.state.direction}&page=${this.state.page}`)
    
        const responses = await Promise.all([pokeNameReq, pokeTypeReq])
        const results = responses.map(res => res.body.results).flat()
    
        await sleep(2000);
    
        this.setState({ loading: false });
        this.setState({ pokedex: results });
      };
    render() {
        return (
            <div>
                <input onChange={this.handleChange} placeholder="Search here!"  />
                <Dropdown
                    sort={this.handleDirection}
                />
                <button onClick={this.handleDex}>Search Pokedex!</button>
                {this.state.loading
                    ? <LoadPause />
                    : <PokeList pokedex={this.state.pokedex}/>
                }
                <button onClick={this.handlePreviousPage}>
                    Previous ({this.state.page - 1})
                </button>
                <button onClick={this.handlePage}>
                    Next Page ({this.state.page + 1})
                </button>
            </div>
        )
    };
};
