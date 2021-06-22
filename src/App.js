import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PokeIndex from './PokeIndex.js';
import Home from './Home.js';
import Header from './Header.js';
import PokeDetail from './PokeDetail.js';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/pokemon/:pokeId" component={PokeDetail} />
            <Route path="/pokemon" component={PokeIndex} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
