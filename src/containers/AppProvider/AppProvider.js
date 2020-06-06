import React from 'react';
import { Provider } from 'react-redux';
import { BreakpointProvider } from 'react-socks';
import App from '../App/App';
import Store from '../../Store';

const AppProvider = () => {
  return (
    <Provider store={Store}>
      <BreakpointProvider>
        <App />
      </BreakpointProvider>
    </Provider>
  );
};

export default AppProvider;
