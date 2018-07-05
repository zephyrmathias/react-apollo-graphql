import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from '../../components/Loading';
import AddChannel from './AddChannel';
import ChannelList from './ChannelList';

const GET_CHANNELS = gql`
  {
    channels {
      _id
      name
    }
  }
`;

const ChannelPage = () => (
  <div>
    <AddChannel />
    <Query query={GET_CHANNELS}>
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return `error ${error.message}`;
        const { channels } = data;
        return <ChannelList channels={channels} />;
      }}
    </Query>
  </div>
);

export default ChannelPage;
