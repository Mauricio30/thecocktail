import React from 'react';
import { BreakpointProvider } from 'react-socks';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from '../App/App';

const client = new ApolloClient({
  uri: 'http://ec2-100-26-136-195.compute-1.amazonaws.com/graphql'
});

const AppProvider = () => {
  return (
    <ApolloProvider client={client}>
      <BreakpointProvider>
        <App />
      </BreakpointProvider>
    </ApolloProvider>
  );
};

export default AppProvider;
