import React, { Component } from 'react'
import PokeItem from './PokeItem.js'
import { Link } from 'react-router-dom';

export default class PokeList extends Component {
    render() {
        return (
            <div className="pokeCard">
                {this.props.pokedex.map(item => (
                    <Link to={`/pokemon/${item._id}`}>
                    <PokeItem
                    pokemon={item.pokemon}
                    image={item.url_image}
                    attack={item.attack}
                    defense={item.defense}
                    type={item.type_1}
                    />
                    </Link>
                    ))}
            </div>
        )
    }
}
