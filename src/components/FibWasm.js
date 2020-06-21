import React, { useState, useEffect, useRef } from 'react';
import wasmPack from '../artifacts/fib.js';
import Timer from './Timer';

export default function WasmFib() {
  const [isReady, setIsReady] = useState(false);
  const instanceRef = useRef();

  useEffect(() => {
    instanceRef.current = wasmPack();
    instanceRef.current.onRuntimeInitialized = () => {
      setIsReady(true);
    };
  }, []);

  const fib = isReady && instanceRef.current._fib;

  return (
    <div>
      <Timer fib={fib} isReady={isReady} title="Web Assembly" />
    </div>
  );
}
