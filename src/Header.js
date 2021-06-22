import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class PokeList extends Component {
    render() {
        return (
            <div className="header">
                <div>Pokedex</div>
                <div className="links">
                    <NavLink className="nav-link" exact to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="/pokemon">
                        Pokemon
                    </NavLink>
                </div>
            </div>
        )
    }
}
