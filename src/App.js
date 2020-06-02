import React, { Component } from "react";
import Board from "./components/Board";
import GameMoves from "./components/GameMoves"
import { Container, Row, Col } from 'react-bootstrap'
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(''),
      isXNext: true, // if its true then X, false then O
      win: false,
      indexWinningBox: [],
      history: []
    };
  }

  setTheState = (obj) => {
    this.setState(obj);
  };

  render() {
    return (
      <div>
          <Container fluid="md">
            <Row>
              <h1>Tic Tac Toe</h1>
            </Row>
            <Row>
              <Col sm="4" style={{padding: "0 auto"}}>
                <Board {...this.state} setTheState={this.setTheState} />  
              </Col>
              <Col sm="4" style={{border: "1px solid black", padding: "15px 50px"}}>
                <GameMoves {...this.state}></GameMoves>
              </Col>
              <Col sm="4" style={{border: "1px solid black", padding: "15px 50px"}}>
                <h2>History:</h2>
              </Col>
            </Row>
          </Container>
          
      </div>
    );
  }
}