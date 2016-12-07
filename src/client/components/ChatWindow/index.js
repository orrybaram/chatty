import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

const propTypes = {
  chatStore: PropTypes.objectOrObservableObject
};

@observer
class ChatWindow extends Component {
  constructor(props) {
    super(props);
    const { chatStore } = props;
    this.chatStore = chatStore;
    this.sendMessage = this.chatStore.sendMessage.bind(this.chatStore);
    this.updateInput = this.chatStore.updateInput.bind(this.chatStore);
  }
  render() {
    return (
      <div className='chat-window'>
        <ChatHeader recipients={this.chatStore.recipients} />
        <ChatMessages
          user={this.chatStore.user}
          recipients={this.chatStore.recipients}
          messages={this.chatStore.messages}
        />
        <ChatInput
          updateInput={this.updateInput}
          sendMessage={this.sendMessage}
          inputValue={this.chatStore.inputValue}
        />
      </div>
    );
  }
}

ChatWindow.propTypes = propTypes;
export default ChatWindow;
