import gql from 'graphql-tag';

const GET_CHANNELS = gql`
  {
    channels {
      _id
      name
    }
  }
`;

export default GET_CHANNELS;
