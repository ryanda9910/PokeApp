import React from 'react';
import {Provider} from 'react-redux';

import MainApp from './src/screens/Home';
import store from './src/utils/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;