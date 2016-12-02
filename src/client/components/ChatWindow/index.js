import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const propTypes = {
  user: PropTypes.object,
  recipients: PropTypes.array,
  messages: PropTypes.array
};

@observer
class ChatWindow extends Component {
  render() {
    return (
      <div className='chat-window'>
        <ChatHeader />
        <ChatMessages messages={this.props.messages} />
        <ChatInput />
      </div>
    );
  }
}

ChatWindow.propTypes = propTypes;
export default ChatWindow;
