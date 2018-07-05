import React from 'react';
import PropTypes from 'prop-types';

const ChannelItem = ({ name }) => (
  <div>
    {name}
  </div>
);

ChannelItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ChannelItem;
