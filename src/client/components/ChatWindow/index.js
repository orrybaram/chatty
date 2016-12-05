import React, { Component, PropTypes } from 'react';
import { inject, observer, PropTypes as MobXPropTypes } from 'mobx-react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import ChatWindowStore from '../../../shared/stores/ChatWindowStore';

const propTypes = {
  messageStore: MobXPropTypes.objectOrObservableObject,
  recipients: MobXPropTypes.arrayOrObservableArray
};

@observer
class ChatWindow extends Component {
  constructor(props) {
    super(props);
    const { user, recipients, messageStore } = props;

    this.user = user;
    this.chat = new ChatWindowStore(this.user, recipients, messageStore);

    this.sendMessage = this.chat.sendMessage.bind(this.chat);
    this.updateInput = this.chat.updateInput.bind(this.chat);
  }
  render() {
    return (
      <div className='chat-window'>
        <ChatHeader recipients={this.chat.recipients} />
        <ChatMessages
          user={this.user}
          recipients={this.chat.recipients}
          messages={this.chat.messages}
        />
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
