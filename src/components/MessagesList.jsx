import React, { Component } from 'react';

import { Message } from 'components/Message';

export class MessagesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.messages);
    return (
      <div>
        {this.props.messages.map((message, idx) => <Message key={idx} message={message} />)}
      </div>
    )
  }
}