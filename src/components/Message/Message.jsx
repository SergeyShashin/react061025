import './Message.scss';

import React, { Component } from 'react';

import classNames from 'classnames';

export class Message extends Component {
  constructor(props) {
    super(props);
  }

  get direction() {
    const { author } = this.props.message;
    return author === 'Автоответчик' ? 'end' : 'start'
  }

  render() {
    const { author, text } = this.props.message;
    const classes = classNames('message', {
      'message-author': author !== 'Автоответчик',
      'message-autoAnswer': author === 'Автоответчик',
    });
    return (
      // <div className='message' style={{
      //   alignSelf: `flex-${this.direction}`
      // }
      // }>
      <div className={classes}>
        <p>{author}:</p>
        <p className='sender'>{text}</p>
      </div >

    )
  }
}