import { useContext } from 'react';
import CounterContext from './CounterContext';

const Counter = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error('Counter must be used within a CounterProvider');
  }

  const { count, increment, decrement, reset } = context;

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
