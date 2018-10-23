import React, { Component } from 'react';

class Pokemon extends Component {
    returnPokemonSpeed() {
        this.props.getSpeed(this.props.type, this.props.speed)
    }

    componentDidMount() {
        this.returnPokemonSpeed();
    }

    render() {
        return(
            <div>
                <h1>Pkm: {this.props.name}</h1>
                <ul style={{listStyle: 'none'}}>
                    <li><span>Lvl: {this.props.level}</span></li>
                    <li><span>hp: {this.props.hp}/{this.props.hp}</span></li>
                </ul>
            </div>
        )
    }
}

export default Pokemon;