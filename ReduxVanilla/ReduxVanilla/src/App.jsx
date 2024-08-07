import { Provider } from 'react-redux';
import store from './storeRedux';
import CounterRedux from './CounterRedux';

const App = () => {
  return (
    <Provider store={store}>
      <div className="ml-[35rem]">
        <h1>Redux Vanilla </h1>
        <CounterRedux />
      </div>
    </Provider>
  );
};

export default App;
