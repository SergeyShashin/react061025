import { handleAction } from 'redux-actions';
import { Map } from 'immutable';
import { load } from 'actions/chats';

const initialState = new Map();

export const chatsRudecer = handleAction({
  [load]: (state, action) => {

  }//state =prevState
}, initialState);