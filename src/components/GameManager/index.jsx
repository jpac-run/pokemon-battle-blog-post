import React, { Component } from 'react';

import Pokemon from '../Pokemon';

const Squirtle = {
    name: 'Squirtle',
    level: 5,
    hp: 20,
    speed: 12,
    status: 'normal',
    type: 'cpu'
}

class GameManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: {
                speed: 0
            },
            cpu: {
                speed: 0
            }
        }
    }

    getSpeed(player, speed, ) {
        let newState = this.state;
        if (player === 'player') {
            newState.player = { speed: speed }
        } else {
            newState.cpu = { speed: speed }
        }

        this.setState(newState);
    }

    whoAttacks() {
        if (this.state.player.speed >= this.state.cpu.speed) {
            console.log('Charmander attacks first!');
            document.getElementById('message-board').innerText = 'Charmander attacks first!';
        } else {
            console.log('Enemy Squirtle attacks first...')
            document.getElementById('message-board').innerText = 'Enemy Squirtle attacks first...';
        }
    }

    componentDidMount() {
        this.whoAttacks();
    }

    render() {
        return(
            <div>
                <Pokemon type='player' name={"Charmander"} level={5} hp={21} speed={14} status={'normal'} getSpeed={this.getSpeed.bind(this)}></Pokemon>
                <Pokemon {...Squirtle} getSpeed={this.getSpeed.bind(this)}></Pokemon>
                <div>
                    <p id="message-board"></p>
                </div>
            </div>
        )
    }
}

export default GameManager;