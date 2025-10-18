import { Messenger } from 'components/Messenger';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Messenger
  },
  // {
  //   exact: true,
  //   route: 'Home',
  //   commponent: Messenger
  // },
  {
    path: '/chats/:id:',
    exact: true,
    component: Messenger
  },
];
