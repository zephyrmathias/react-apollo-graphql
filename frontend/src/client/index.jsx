import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css/normalize.css';
import App from './components/App';

/**
 * need to move this to ./apollo/links.js
 * and handle errorLinks etc.
 */
const httpLink = new HttpLink({
  uri: '/graphql',
});

const cache = new InMemoryCache().restore(window.__APOLLO_STATE__);

const client = new ApolloClient({
  link: httpLink,
  cache,
});

const Application = (
  <AppContainer>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </AppContainer>
);

const MOUNT_NODE = document.getElementById('app');

const renderApp = () => {
  ReactDOM.hydrate(
    Application,
    MOUNT_NODE,
  );
};

if (module.hot) {
  module.hot.accept('./components/App', () => {
    renderApp();
  });
}

renderApp();
