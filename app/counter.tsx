'use client'
import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h2>counter{count}</h2>
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  );
}