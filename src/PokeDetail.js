import React, { Component } from 'react'
import request from 'superagent';
import LoadPause from './LoadPause.js';

const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))

export default class PokeDetail extends Component {
    state = {
        pokeDetail: {},
        loading: false,
    };

    componentDidMount() {
        this.fetchDetail();
    }

    fetchDetail = async () => {
        this.setState({ loading: true })
        const data = await request.get(
            `https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params.pokeId}`
        );
        await sleep(2000);
        
        this.setState({ pokeDetail: data.body })
        this.setState({ loading: false })
    };
    render() {
        return (
            <div>
                {this.state.loading && <LoadPause />}
                {!this.state.loading && (
                    <div>
                        <h3>{this.state.pokeDetail.pokemon}</h3>
                        <img src={this.state.pokeDetail.url_image} alt={this.state.pokeDetail.pokemon} />
                        
                    </div>
                )}
            </div>
        )
    }
}
