import React from "react";

export function Counter() {
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <p>Counter: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }
  