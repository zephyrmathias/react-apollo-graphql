import Channel from '../../db/models/Channel';

const resolvers = {
  Query: {
    channels: async () => {
      const channels = await Channel.find({});
      return channels;
    },
  },
};

export default resolvers;
