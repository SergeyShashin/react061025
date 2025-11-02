import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Messenger } from 'components/Messenger';

class MessengerContainer extends PureComponent {
  render() {
    return (
      <Messenger />
    )
  }
}
