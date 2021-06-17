import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <select onChange={this.props.sort}>
                <option value="">Any</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        )
    }
}
