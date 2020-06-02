import React, { Component } from 'react'

export default class GameMoves extends Component {
    render() {
        if (this.props.history.length === 0) 
        {
            return (
            <div>
                <h2>Game Moves: </h2>
            </div>
            )
        }
        else {
            return(
                <div>
                    <h2>Game Moves: </h2>
                </div>
            )
        }
    }
}
