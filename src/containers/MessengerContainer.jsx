import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Messenger } from 'components/Messenger';
import { load } from 'actions/chats';

class MessengerContainer extends PureComponent {
  componentDidMount() {
    const { chats } = this.props;
    loadChats();
  }
  render() {
    const { chats } = this.props;
    return (
      <Messenger chats={chats} />
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    chats: state.chats.get('entries').toJS()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    load: () => dispatch(load())
  }

}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);