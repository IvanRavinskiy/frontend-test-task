import React from 'react';
import {Provider} from 'react-redux';

import {RootNavigation} from './src/navigation';
import {store} from './src/state';

export const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};
