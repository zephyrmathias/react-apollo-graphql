import React from 'react';
import PropTypes from 'prop-types';
import ChannelItem from '../ChannelItem';

const ChannelList = ({ channels }) => (
  channels.map(channel => <ChannelItem key={channel._id} {...channel} />)
);

ChannelList.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ChannelList;
