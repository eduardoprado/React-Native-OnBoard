// src/components/Hello.tsx

import * as React from 'react';
import './Hello.css';

function Hello({ name, enthusiasmLevel = 1 }) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars) {
  return Array(numChars + 1).join('!');
}