import mongoose from 'mongoose';

const { Schema } = mongoose;

const ChannelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  messages: [{
    message: {
      type: Schema.Types.ObjectId,
      ref: 'Message',
    },
  }],
});

const ChannelModel = mongoose.model('Channel', ChannelSchema);

export default ChannelModel;
