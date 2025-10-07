import React, { Component } from 'react';
import { Counter } from 'components/Counter';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idVisible: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({ isVisible: !prevState.isVisible }));
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div>
        <h2>Привет из App!!!</h2>
        <button onClick={this.handleClick}>Click</button>
        {isVisible && <Counter />}

      </div>
    )
  }
}