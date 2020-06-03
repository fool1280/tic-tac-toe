import React, { Component } from "react";
import Square from "./Square";

/*
0 1 2
3 4 5
6 7 8
*/

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

export default class Board extends Component {
  renderSquare = (num) => {
    return <Square id={num} win={this.props.win} index={this.props.indexWinningBox} boxClick={this.boxClick} value={this.props.squares[num]}/>;
  };
  
  checkWin = () => {
    let board = this.props.squares;
    let check = conditions.findIndex((item) => {
      return ((board[item[0]] === board[item[1]]) && (board[item[1]] === board[item[2]]) && (board[item[0]] !== ''))
    })
    if (check > -1) {
      return check;
    }
  }

  boxClick = (id) => {
    if ((this.props.squares[id] !== '') || this.props.win) return;
    //change the value from null to 'x' at the array index number id
    let squaresFromApp = this.props.squares 
    squaresFromApp[id] = this.props.isXNext ? 'X':'O'
    let a = this.props.history
    this.props.setTheState({history: [...a, id]});
    this.props.setTheState({squares: squaresFromApp, isXNext: !this.props.isXNext})
    let index = this.checkWin();
    if (index > -1) {
      this.props.setTheState({win: true, indexWinningBox: conditions[index]});
    }
  }
  render() {
    let status =' ';
    let winning = '';
    status =`Next player: ${this.props.isXNext?'X':'O'}`
    if (this.props.win) {
      winning = `${this.props.isXNext?'O':'X'} Won!`
    }
    console.log(this.props.history);
    return (
      <div>
        <h2>{status}</h2>
        <h2>{winning}</h2>
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}