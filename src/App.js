import React from 'react';
import './App.css';
import Game from "./components/Game";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from "./reducers/GameReducer";

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <Game />
    </Provider>
    </div>
  );
}
export default App;
