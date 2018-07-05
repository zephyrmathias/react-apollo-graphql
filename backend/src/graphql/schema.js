import { mergeSchemas } from 'graphql-tools';
import ChannelSchema from './Channel';
import MessageSchema from './Message';

const rootSchema = mergeSchemas({
  schemas: [
    ChannelSchema,
    MessageSchema,
  ],
});

export default rootSchema;
