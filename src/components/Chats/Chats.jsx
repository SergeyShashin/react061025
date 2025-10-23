
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Chats extends Component {
  constructor(props) {
    super(props);
  }

  handleClickChats = e => {
    if (e.target.tagName === 'A') {
      this.props.sendChatID(e.target.id);
    }
  }

  render() {
    return (
      <div className='chats' onClick={this.handleClickChats}>
        <p>
          <Link to='/chats/1' id='1'>
            Чат1
          </Link>
        </p>
        <p>
          <Link to='/chats/2' id='2'>
            Чат2
          </Link>
        </p>
        <p>
          <Link to='/chats/3' id='3'>
            Чат3
          </Link>
        </p>
      </div>
    )
  }
}