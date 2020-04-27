import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Provider} from 'react-redux';
import ReduxStore from './ReduxStore';
import SimpleUsers from './components/SimpleUsers';

function App() {
  return (
    <Provider store={ReduxStore}>
      <div className="App">
          <h1> Hello </h1>
          <SimpleUsers></SimpleUsers>
      </div>
    </Provider>
  );
}

export default App;
