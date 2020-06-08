/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { BreakpointProvider } from 'react-socks';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import App from '../App/App';
import Store from '../../Store';

const client = new ApolloClient({
  uri: 'http://localhost:2500/graphql'
});

const AppProvider = () => {
  return (
    <Provider store={Store}>
      <ApolloProvider client={client}>
        <BreakpointProvider>
          <App />
        </BreakpointProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default AppProvider;
