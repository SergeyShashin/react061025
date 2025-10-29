import { combineReducers } from 'redux';
import {chatsRudecer} from './chats'

export const rootReducer = combineReducers({
  chats: chatsRudecer
});