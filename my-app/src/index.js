import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Hello from './components/Hello';

ReactDOM.render(
  /*<App />,*/
 <Hello name="TypeScript" enthusiasmLevel={10} />,
  document.getElementById('root')
);
