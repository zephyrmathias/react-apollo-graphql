import React from 'react';
import { Query } from 'react-apollo';
import Loading from '../../components/Loading';
import AddChannel from './AddChannel';
import ChannelList from './ChannelList';
import GET_CHANNELS from './queries';

const ChannelPage = () => (
  <div>
    <AddChannel />
    <Query query={GET_CHANNELS}>
      {({ data, loading, error }) => {
        if (loading) return <Loading />;
        if (error) return `error ${error.message}`;
        const { channels } = data;
        return <ChannelList channels={channels} />;
      }}
    </Query>
  </div>
);

export default ChannelPage;
