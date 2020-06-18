import React from 'react';
import FibWasm from './FibWasm';
import FibVanilla from './FibVanilla';

const App = () => {
  return (
    <div>
      <h1>Fibonacci Algorithm: WASM vs. JS</h1>
      <FibWasm />
      <FibVanilla />
    </div>
  );
};

export default App;
