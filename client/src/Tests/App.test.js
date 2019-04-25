import React from 'react';
import ReactDOM from 'react-dom';
import HomeRegister from './HomeRegister';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeRegister />, div);
  ReactDOM.unmountComponentAtNode(div);
});
