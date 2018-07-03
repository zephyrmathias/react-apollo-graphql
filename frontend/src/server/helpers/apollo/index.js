import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URL,
  fetch,
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  ssrMode: true,
  link: httpLink,
  cache,
});

export default client;
