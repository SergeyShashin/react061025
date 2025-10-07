import React, { Component } from 'react';

export class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { author, text } = this.props.message;
    return (
      <div>
        <p>{author}:</p>
        <p>{text}</p>
      </div>

    )
  }
}