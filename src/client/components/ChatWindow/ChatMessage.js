import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import moment from 'moment';

const propTypes = {
  message: PropTypes.object
};

@observer
class ChatMessage extends Component {
  componentDidMount() {
    setInterval(() => {
      this.setState({});
    }, 1000);
  }
  render() {
    console.log('render');
    const { message } = this.props;
    return (
      <div className='chat-window__messages__message'>
        {message.body}
        {message.sentBy.name}
        {moment(message.dateCreated).fromNow()}
      </div>
    );
  }
};

ChatMessage.propTypes = propTypes;
export default ChatMessage;
