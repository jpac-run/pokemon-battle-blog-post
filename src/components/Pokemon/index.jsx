import React, { Component } from 'react';

class Pokemon extends Component {
    // returnPokemonSpeed() {
    //     this.props.getSpeed(this.props.type, this.props.speed)
    // }

    attack = (move) => {
        this.props.sendAttack(this.props.name, move);
    }

    render() {
        return(
            <div>
                <h1>Pkm: {this.props.name}</h1>
                <ul style={{listStyle: 'none'}}>
                    <li><span>Lvl: {this.props.level}</span></li>
                    <li><span>hp: {this.props.hp}/{this.props.hp}</span></li>
                </ul>

                <ul style={{listStyle: 'none'}}>
                    <li><button onClick={() => this.attack(this.props.moves.move_1)}>{this.props.moves.move_1.name}</button></li>
                    <li><button onClick={() => this.attack(this.props.moves.move_2)}>{this.props.moves.move_2.name}</button></li>
                    <li><span>-</span></li>
                    <li><span>-</span></li>
                </ul>
            </div>
        )
    }
}

export default Pokemon;