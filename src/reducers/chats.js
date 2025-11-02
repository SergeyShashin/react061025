import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';
import { load } from 'actions/chats';

const initialState = new Map({
  loading: false,
  entries: new Map()
});

export const chatsRudecer = handleActions({
  [load]: (state, action) => {
    return state.set('entries', fromJS({
      1: {
        id: 1,
        messages: [{ author: 'Автоответчик', text: `Привет, друг!). Это чат 1.` }],
        chatName: '1',
      },
      2: {
        id: 2,
        messages: [{ author: 'Автоответчик', text: `Привет, друг!). Это чат 2.` }],
        chatName: '2',
      },
      3: {
        id: 3,
        messages: [{ author: 'Автоответчик', text: `Привет, друг!). Это чат 3.` }],
        chatName: '3',
      },
    }))
  }//state = prevState
}, initialState);