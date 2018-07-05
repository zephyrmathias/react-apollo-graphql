import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import typeDefs from './schema';

const schema = makeExecutableSchema({
  typeDefs,
});

addMockFunctionsToSchema({ schema });

export default schema;
