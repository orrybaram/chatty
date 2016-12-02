import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import ChatStore from '../../../shared/stores/ChatStore';

const propTypes = {
  user: PropTypes.object,
  recipients: PropTypes.array,
  messages: PropTypes.array
};

@observer
class ChatWindow extends Component {
  constructor(props) {
    super(props);
    const { user, recipients, messages } = props;
    this.chat = new ChatStore(user, recipients, messages);
    this.sendMessage = this.chat.sendMessage.bind(this.chat);
    this.updateInput = this.chat.updateInput.bind(this.chat);
  }
  render() {
    return (
      <div className='chat-window'>
        <ChatHeader recipients={this.chat.recipients} />
        <ChatMessages messages={this.chat.messages} />
        <ChatInput
          updateInput={this.updateInput}
          sendMessage={this.sendMessage}
          inputValue={this.chat.inputValue}
        />
      </div>
    );
  }
}

ChatWindow.propTypes = propTypes;
export default ChatWindow;
