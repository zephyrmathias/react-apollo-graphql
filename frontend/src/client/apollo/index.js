import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_URL,
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});

export default client;
