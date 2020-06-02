import React, { Component } from "react";

export default class Square extends Component {
  render() {
    return (
      <div className={`box ${this.props.win && this.props.index.includes(this.props.id) ? `win` : this.props.index.length > 0 ? `lose`: ``}`} onClick={() => this.props.boxClick(this.props.id)}>
        <div>{this.props.value}</div>
      </div>
    );
  }
}