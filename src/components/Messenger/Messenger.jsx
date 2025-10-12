import './Messenger.css';
import 'assets/global.css';

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
    this.interval = 0;

  }

  componentDidMount() {
    // this.interval = setInterval(() => {
    //   let randIdx = Math.floor(Math.random() * messages.length);

    //   this.setState({
    //     messages: this.state.messages.concat({ author: 'Автор', text: messages[randIdx] })
    //   })

    // }, 2000)
  }

  componentDidUpdate() {
    const { messages } = this.state;
    const { author } = messages[messages.length - 1];
    if (author === 'Автор') {
      setTimeout(() => this.setState({
        messages: messages.concat({ author: 'Автоответчик', text: `Здравствуйте, ${author}!) Сообщение получено.` })
      }), 1000);

    }
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  handleSend = (message) => this.setState({
    messages: this.state.messages.concat(message)
  });

  render() {
    return (
      <div className='messenger'>
        <div className='header'>Header</div>
        <div className='chatsAndFormAndList'>
          <div className='chats'>
            <p>Чат1</p>
            <p>Чат2</p>
            <p>Чат3</p>
          </div>
          <div className='formAndList'>
            <MessageForm onSend={this.handleSend} />
            <MessagesList messages={this.state.messages} />
          </div>
        </div>

      </div>
    )
  }
}