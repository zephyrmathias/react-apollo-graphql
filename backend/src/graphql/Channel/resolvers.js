import Channel from '../../db/models/Channel';

const resolvers = {
  Query: {
    channels: async () => {
      const channels = await Channel.find({});
      return channels;
    },
  },

  Mutation: {
    addChannel: async (root, { name }) => {
      const channel = new Channel();
      channel.name = name;
      const result = await channel.save();
      return result;
    },
  },

};

export default resolvers;
