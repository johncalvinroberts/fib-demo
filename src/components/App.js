import React from 'react';
import FibWasm from './FibWasm';
import FibVanilla from './FibVanilla';

const App = () => {
  return (
    <div>
      <h1>Fibonacci Algorithm: WASM vs. JS</h1>
      <FibWasm />
      <FibVanilla />
      <div className="source-link">
        See the source on Github -{' '}
        <a href="https://github.com/johncalvinroberts/fib-demo">Link</a>
      </div>
    </div>
  );
};

export default App;
