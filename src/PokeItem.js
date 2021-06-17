import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className="card">
               <h2>{this.props.pokemon}</h2>
               <img className="image" src={this.props.image} alt=''/>
               <p>Attack: {this.props.attack}</p>
               <p>Defense: {this.props.defense}</p>
               <p>Type: {this.props.type}</p>
            </div>
        )
    }
}
