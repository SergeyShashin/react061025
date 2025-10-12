import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class MessageForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      author: '',
      text: ''
    };

  }

  // static propTypes = {
  //   onSend: PropTypes.functi
  // };


  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  sendMessage = () => {
    const { onSend } = this.props;
    if (typeof onSend === 'function') {
      onSend(this.state);
      this.setState({ text: '' });
    }
  }

  handleCtrlEnter = e => {
    e.ctrlKey && e.keyCode === 13 ? this.sendMessage() : '';
  }

  render() {
    const { author, text } = this.state;
    return (
      <div>
        <input name='author' placeholder='author' onChange={this.handleInputChange} value={author} />
        <input name='text' placeholder='text' onChange={this.handleInputChange} value={text} onKeyDown={this.handleCtrlEnter} />
        <button onClick={this.sendMessage}>Send</button>
      </div>
    )
  }
}