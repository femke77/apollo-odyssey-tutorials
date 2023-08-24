import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Apollo Client is the class that represents apollo on the front end
const client = new ApolloClient({
  // link to the server
  uri: "http://localhost:4000",
  // use the built in cache
  cache: new InMemoryCache(),
});

ReactDOM.render(
  // apollo provider provides apollo to react
  <ApolloProvider client={client}>
    <GlobalStyles />

    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);