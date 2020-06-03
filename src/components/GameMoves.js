import React, { Component } from 'react'

const conditions = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8], 
    [2, 4, 6],
    [3, 4, 5], 
    [6, 7, 8],
]

export default class GameMoves extends Component {
    checkWin = (board) => {
        let check = conditions.findIndex((item) => {
          return ((board[item[0]] === board[item[1]]) && (board[item[1]] === board[item[2]]) && (board[item[0]] !== ''))
        })
        if (check > -1) {
          return check;
        }
    }
    timeTravel = (id) => {
        let newSquare = Array(9).fill('');
        let temp = this.props.history.slice(0, id+1).map((item, id) => {
            newSquare[item] = (id%2 === 0) ? 'X' : 'O';
            return 0;
        })
        temp = this.props.history.slice(0, id+1); 
        console.log("New Square", newSquare);
        console.log("Square", this.props.squares);
        this.props.setTheState({squares: newSquare, history: temp});
        let index = this.checkWin(newSquare);
        if (index > -1) {
            this.props.setTheState({win: true, indexWinningBox: conditions[index]});
        } else this.props.setTheState({win: false, indexWinningBox: []});
    }
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
            console.log(this.props.history);
            return(
                <div>
                    <h2>Game Moves: </h2>
                    <ul>
                    {this.props.history.map((item, id) => {
                        return (<li key={id}><button onClick={() => this.timeTravel(id)}>Go to move {id+1}</button></li>)
                    })}
                    </ul>
                </div>
            )
        }
    }
}
