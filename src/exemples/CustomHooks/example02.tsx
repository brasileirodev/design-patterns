import { useCounter } from "./example01";

export function CounterComponent() {
    const { count, increment, decrement } = useCounter();
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
      </div>
    );
  }
  