import './Message.scss';

import React, { Component } from 'react';

export class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { author, text } = this.props.message;
    return (
      <div className='message'>
        <p>{author}:</p>
        <p>{text}</p>
      </div>

    )
  }
}