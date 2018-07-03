import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_CHANNELS = gql`
  {
    channels {
      id
      name
    }
  }
`;

const ProfilePage = () => (
  <Query query={GET_CHANNELS}>
    {({ loading, error, data }) => {
      if (loading) return 'loading';
      if (error) return `error ${error.message}`;
      const { channels } = data;
      return (
        <div>
          {channels.map(channel => (
            <div key={channel.id}>{channel.name}</div>
          ))}
        </div>
      );
    }}
  </Query>
);

export default ProfilePage;
