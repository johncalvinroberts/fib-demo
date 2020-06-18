import React from 'react';
import Timer from './Timer';
import fib from '../fib.js';

export default function WasmFib() {
  return (
    <div>
      <Timer fib={fib} isReady title="Javascript" />
    </div>
  );
}
