import mongoose from 'mongoose';

const { Schema } = mongoose;

const MessageSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const MessageModel = mongoose.model('Message', MessageSchema);

export default MessageModel;
