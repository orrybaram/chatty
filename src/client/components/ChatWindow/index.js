import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const propTypes = {
  user: PropTypes.object,
  recipients: PropTypes.array,
  messages: PropTypes.array,
  inputValue: PropTypes.string,
  updateInput: PropTypes.func,
  sendMessage: PropTypes.func
};

@observer
class ChatWindow extends Component {
  render() {
    return (
      <div className='chat-window'>
        <ChatHeader recipients={this.props.recipients} />
        <ChatMessages messages={this.props.messages} />
        <ChatInput
          updateInput={this.props.updateInput}
          sendMessage={this.props.sendMessage}
          inputValue={this.props.inputValue}
        />
      </div>
    );
  }
}

ChatWindow.propTypes = propTypes;
export default ChatWindow;
