import React from 'react';
import { BreakpointProvider } from 'react-socks';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from '../App/App';
import { Provider } from 'react-redux';
import Store from '../../Store';

const client = new ApolloClient({
  uri: 'http://locahost:2500/graphql'
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
