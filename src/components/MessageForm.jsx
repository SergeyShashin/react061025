import React, { Component } from "react";

export class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  sendMessage = () => {
    const {onSend}=this.props;
    if (typeof onSend === 'function') {
      onSend(this.state);
      this.setState({ text: '' });
    }
  }

  render() {
    const { author, text } = this.state;
    return (
      <div>
        <input name='author' placeholder='author' onChange={this.handleInputChange} value={author} />
        <input name='text' placeholder='text' onChange={this.handleInputChange} value={text} />
        <button onClick={this.sendMessage}>Send</button>
      </div>
    )
  }
}