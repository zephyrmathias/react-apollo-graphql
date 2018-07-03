import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'apollo-server-express';
import schema from './graphql/schema';

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ // eslint-disable-line global-require
    path: path.join(process.cwd(), '.env.dev'),
  });
} else {
  require('dotenv').config({ // eslint-disable-line global-require
    path: path.join(process.cwd(), '.env.prod'),
  });
}

const app = express();

app.use(morgan('combined'));

app.use(bodyParser.json());

app.use(cors());

app.use('/graphql', graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`running on port: ${PORT}`);
});
