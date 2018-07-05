import mongoose from 'mongoose';

/**
 *
 * @param {String} MONGODB_URL
 */
const connectDB = (MONGODB_URL) => {
  mongoose.Promise = global.Promise;
  mongoose.connect(MONGODB_URL);
  const db = mongoose.connection;

  db.once('open', () => {
    console.log('connect to MongoDB');
  });

  db.on('error', () => {
    console.log('failed to connect to MongoDB');
  });
};

export default connectDB;
