import './Messenger.css';
import 'assets/global.css';

import React, { Component } from 'react';
import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';
import { Chats } from 'components/Chats';
import { ChatNotSelect } from 'components/ChatNotSelect';

// const messages = [
//   'Привет друг!)',
//   'Как дела?',
//   'Как погода?',
//   'Как настроение?',
// ];

export class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{ author: 'Автоответчик', text: `Привет, друг!)` }],
      chats: {
        1: {
          messages: [{ author: 'Автоответчик', text: `Привет, друг!). Это чат ${this.chatName}` }],
          chatName: '1',
        },
        2: {
          messages: [{ author: 'Автоответчик', text: `Привет, друг!). Это чат ${this.chatName}` }],
          chatName: '2',
        },
        3: {
          messages: [{ author: 'Автоответчик', text: `Привет, друг!). Это чат ${this.chatName}` }],
          chatName: '3',
        },
      },
      currentChat: '',
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
      // setTimeout(() => this.setState({
      //   messages: messages.concat({ author: 'Автоответчик', text: `Здравствуйте, ${author}!) Сообщение получено.` })
      // }), 1000);
      setTimeout(() => this.handleSend({ author: 'Автоответчик', text: `Здравствуйте, ${author}!) Сообщение получено.` }), 1000);

    }
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  handleSend = (message) => {
    const { chats, currentChat } = this.state;
    const { messages } = chats[currentChat];
    this.setState({
    messages: this.state.messages.concat(message)
    });
    // this.setState({
    //   chats: Object.assign(chats[currentChat], messages.concat(message))
    // });
  };

  handleSendChatID = chatID => {
    this.setState({ currentChat: chatID });
  }

  render() {
    const { messages, currentChat } = this.state;

    return (
      <div className='messenger'>
        <div className='header'>Header</div>
        <div className='chatsAndFormAndList'>
          <Chats sendChatID={this.handleSendChatID} />
          <div className='formAndList'>
            {currentChat && <MessageForm onSend={this.handleSend} />}
            {currentChat && <MessagesList messages={this.state.messages} />}
          </div>         
        </div>

      </div>
    )
  }
}