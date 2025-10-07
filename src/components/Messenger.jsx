import React, { Component } from 'react';
import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';

const messages = [
  'Привет друг!)',
  'Как дела?',
  'Как погода?',
  'Как настроение?',
];

export class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{ author: 'Автор', text: 'Привет, друг!)' }]
    };

  }

  render() {
    return (
      <div>
        <MessagesList messages={this.state.messages} />
        {/* <MessageForm /> */}
      </div>
    )
  }
}