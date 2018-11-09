import React, { Component } from 'react';

import Pokemon from '../Pokemon';

const Squirtle = {
    name: 'Squirtle',
    level: 5,
    hp: 20,
    type: 'cpu',
    moves: {
        move_1: {
            name: "Tackle",
            power: 4
        },
        move_2: {
            name: "Growl",
            power: 0
        }
    }
}

class GameManager extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getAttack = (pokemon, move) => {
        let newState = this.state;
        newState = {
            attack: {
                pokemon: pokemon,
                move: move.name
            }
        }
        this.setState(newState);
    }

    showMessage = () => {
        if(this.state.attack) {
            return(
                <div>
                    <p>{`${this.state.attack.pokemon} uses ${this.state.attack.move}!`}</p>
                </div>
            )
        }
        return false;
    }

    render() {
        return(
            <div>
                <Pokemon 
                    type='player' 
                    name={"Charmander"} 
                    level={5} 
                    hp={21} 
                    moves={{move_1: {name: "Scratch", power: 5},
                            move_2: {name: "Leer", power: 0}}}
                    sendAttack={this.getAttack.bind(this)}>
                </Pokemon>
                <Pokemon {...Squirtle} sendAttack={this.getAttack.bind(this)}></Pokemon>
                { this.showMessage() }
            </div>
        )
    }
}

export default GameManager;