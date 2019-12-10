import React from 'react';
import ReactDOM from 'react-dom';

import GameMaster from './GameMaster';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GameMaster />, div);
  ReactDOM.unmountComponentAtNode(div);
});
