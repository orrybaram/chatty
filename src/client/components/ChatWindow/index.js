import React, { Component, PropTypes } from 'react';
import { inject, observer, PropTypes as MobXPropTypes } from 'mobx-react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

import ChatStore from '../../../shared/stores/ChatStore';
import MessageStore from '../../../shared/stores/MessageStore';
import UserStore from '../../../shared/stores/UserStore';

const propTypes = {
  chatId: PropTypes.number,
  userId: PropTypes.number,
  recipients: MobXPropTypes.arrayOrObservableArray
};

@observer
class ChatWindow extends Component {
  constructor(props) {
    super(props);
    const { userId, chatId, recipients } = props;

    this.user = new UserStore(userId);
    this.messageStore = new MessageStore(chatId);
    this.chat = new ChatStore(this.user, recipients, this.messageStore);

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
