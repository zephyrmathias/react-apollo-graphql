import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css/normalize.css';
import client from './apollo';
import App from './components/App';

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
