import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = (e) => {
    const operation = Number(e.target.dataset.operation);
    this.setState(prevState => ({ counter: prevState.counter + operation }));
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>Привет из App!!!</h2>
        <button data-operation='-1' onClick={this.handleClick}>-</button>
        <span>{counter}</span>
        <button data-operation='1' onClick={this.handleClick}>+</button>
      </div>
    )
  }
}