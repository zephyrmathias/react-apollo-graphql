const typeDefs = `
  type Channel {
    _id: ID!
    name: String
  }

  type Query {
    channels: [Channel]
  }

  type Mutation {
    addChannel(name: String!): Channel
  }
`;

export default typeDefs;
