const typeDefs = `
  type Message {
    _id: ID!,
    text: String
  }

  type Query {
    messages: [Message]
  }

  type Mutation {
    addMessage(text: String!): Message
  }
`;

export default typeDefs;
