import React, { Component } from 'react'
import PokeItem from './PokeItem.js'

export default class PokeList extends Component {
    render() {
        return (
            <div>
                {this.props.pokedex.map(item =>
                    <PokeItem
                    pokemon={item.pokemon}
                    image={item.url_image}
                    attack={item.attack}
                    defense={item.defense}
                    type={item.type_1}
                    />)}
            </div>
        )
    }
}
