import React from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const ADD_CHANNEL = gql`
  mutation($name: String!) {
    addChannel(name: $name) {
      _id
      name
    }
  }
`;

class AddChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { channelName: '' };
    this._onHandleSubmit = this._onHandleSubmit.bind(this);
    this._onHandleChange = this._onHandleChange.bind(this);
  }

  async _onHandleSubmit(event, addChannel) {
    /**
     * need to call preventDefault before
     * asynchronous function
     * to make it work as expected
     */
    event.preventDefault();
    await addChannel();
    this.setState({
      channelName: '',
    });
  }

  _onHandleChange(event) {
    this.setState({
      channelName: event.target.value,
    });
  }

  render() {
    const { channelName } = this.state;
    return (
      <Mutation
        mutation={ADD_CHANNEL}
        variables={{
          name: channelName,
        }}
      >
        {(addChannel, { data, loading, error }) => (
          <div>
            {error && (
              <div>error</div>
            )}
            <form onSubmit={e => this._onHandleSubmit(e, addChannel)}>
              <input
                type="text"
                placeholder="Add Channel"
                value={channelName}
                onChange={this._onHandleChange}
              />
              <button type="submit">
                Add Channel
              </button>
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default AddChannel;
