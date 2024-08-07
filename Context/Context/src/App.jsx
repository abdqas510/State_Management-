import { CounterProvider } from './CounterContext';
import Counter from './Counter';
import Header from './components/Header';

const App = () => {
  return (
    <CounterProvider>
      <div className="ml-[35rem] ">
        <Header/>
        <Counter />
      </div>
    </CounterProvider>
  );
};

export default App;
