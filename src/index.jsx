// import { User } from "./user";
// const user = new User('Luke', 'SkyWalker');
// console.log('Welcome World!)');
// console.log(user.sayWelcome());

// import ReactDom from "react-dom";
import React from "react";
import { createRoot } from 'react-dom/client';

import { App } from 'components/App';

// const element = React.createElement(
//   'h1',
//   { className: 'react-welcome' },
//   'Привет, Реакт работает!)',
// );

// const element = <h1 className="welcome-react">Привет! JSX тоже работает!</h1>;

// const messages = ['Привет, друг!', 'Как дела?', 'Как погода?', 'Как настроение?'];

// const Message = props => <li>{props.msg}</li>
// const Messages = props => props.messages.map((msg, idx) => <ul><Message msg={msg} key={idx} /></ul>);

// ReactDom.render(
//   element,
//   document.getElementById('root')
// );

const root = createRoot(document.getElementById('root'));
// root.render(element);
// root.render(<Message msg={'Привет, компонент работает!)'} />);
// root.render(<Messages messages={messages} />);
root.render(<App />);
