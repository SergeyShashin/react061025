import React, { Component } from 'react';

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.interval = 0;
  }

  componentDidMount() {
    this.interval = setInterval(() => console.log('+'), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick = (e) => {
    const operation = Number(e.target.dataset.operation);
    this.setState(prevState => ({ counter: prevState.counter + operation }));
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h2>Привет из Counter!!!</h2>
        <button data-operation='-1' onClick={this.handleClick}>-</button>
        <span>{counter}</span>
        <button data-operation='1' onClick={this.handleClick}>+</button>
      </div>
    )
  }
}