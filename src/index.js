// import { User } from "./user";
// const user = new User('Luke', 'SkyWalker');
// console.log('Welcome World!)');
// console.log(user.sayWelcome());

import React from "react";
// import ReactDom from "react-dom";
import { createRoot } from 'react-dom/client';

const element = React.createElement(
  'h1',
  { className: 'react-welcome' },
  'Привет, Реакт работает!)',
);

// ReactDom.render(
//   element,
//   document.getElementById('root')
// );
const root = createRoot(document.getElementById('root'));
root.render(element);
