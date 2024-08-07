// src/App.jsx

import Header from './Components/Header';
import Counter from './features/ReduxTK/Counter';
import './App.css';

function App() {
  return (
    <>
      <div className="w-full mb-12">
        <Header />
      </div>
      <div className="mr-10">
        <Counter />
      </div>
    </>
  );
}

export default App;
