import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import OnBoarding from '../src/components/onboarding/index';
import store from '../src/redux/store';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <OnBoarding/>
    </Provider>
    </div>
  );
}

export default App;
