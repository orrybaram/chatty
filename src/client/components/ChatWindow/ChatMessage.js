import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import moment from 'moment';

const propTypes = {
  message: PropTypes.object
};

@observer
class ChatMessage extends Component {
  constructor() {
    super();
    this.interval = null;
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({});
    }, 1000);
  }
  render() {
    const { message } = this.props;
    return (
      <div className='chat-window__messages__message'>
        <div>{message.body}</div>
        <div>{message.sentBy.name}</div>
        <div>{moment(message.dateCreated).fromNow()}</div>
        <img src={message.sentBy.avatarUrl} />
      </div>
    );
  }
}

ChatMessage.propTypes = propTypes;
export default ChatMessage;
