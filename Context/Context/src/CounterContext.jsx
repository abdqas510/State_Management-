import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create a Context for the counter
const CounterContext = createContext();

// Create a Provider component
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

// Define prop types for CounterProvider
CounterProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

// Export the context for use
export default CounterContext;
