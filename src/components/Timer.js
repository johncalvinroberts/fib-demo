import React, { useRef, useState } from 'react';

const Timer = ({ fib, title, isReady }) => {
  const inputRef = useRef();
  const [res, setRes] = useState();
  const [time, setTime] = useState();
  const [error, setError] = useState();

  const handleSubmit = () => {
    setRes(null);
    setTime(null);
    setError(null);
    const { performance } = window;
    const start = performance.now();
    const value = parseInt(inputRef.current.value, 10);
    if (value > 50) {
      setError('Value cannot be greater than 50');
      return;
    }
    const res = fib(value);
    setRes(res);
    const end = performance.now();
    const runTime = end - start;
    setTime(runTime);
  };

  return (
    <div className="timer">
      <h2>{title}</h2>
      <div className="input-wrapper">
        <input type="number" min="0" ref={inputRef} />
        <button onClick={handleSubmit} disabled={!isReady}>
          Run Fibonacci
        </button>
        <div style={{ color: 'red' }}>
          <strong>{error}</strong>
        </div>
      </div>
      <div>
        <strong>Result: {res}</strong>
      </div>
      <div>
        <strong>Runtime: {time || 0}ms</strong>
      </div>
    </div>
  );
};

export default Timer;
