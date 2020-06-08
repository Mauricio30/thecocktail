import React from 'react';
import { BreakpointProvider } from 'react-socks';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from '../App/App';
import { Provider } from 'react-redux';
import Store from '../../Store';

const client = new ApolloClient({
  uri: 'https://ec2-100-26-136-195.compute-1.amazonaws.com/graphql'
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
