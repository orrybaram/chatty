import React, { Component, PropTypes } from 'react';
import { inject, observer, PropTypes as MobXPropTypes } from 'mobx-react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

import ChatWindowStore from '../../../shared/stores/ChatWindowStore';
import MessageStore from '../../../shared/stores/MessageStore';
import UserStore from '../../../shared/stores/UserStore';

const propTypes = {
  chatId: PropTypes.number,
  userId: PropTypes.number,
  recipientIds: MobXPropTypes.arrayOrObservableArray
};

@observer
class ChatWindow extends Component {
  constructor(props) {
    super(props);
    const { userId, chatId, recipientIds } = props;

    this.user = new UserStore(userId);
    this.recipients = recipientIds.map(id => new UserStore(id))
    this.messageStore = new MessageStore(chatId);
    this.chat = new ChatWindowStore(this.user, recipients, this.messageStore);

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
