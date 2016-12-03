import React, { Component, PropTypes } from 'react';
import { inject, observer, PropTypes as MobXPropTypes } from 'mobx-react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import ChatStore from '../../../shared/stores/ChatStore';
import MessageStore from '../../../shared/stores/MessageStore';

const propTypes = {
  user: MobXPropTypes.objectOrObservableObject,
  recipients: MobXPropTypes.arrayOrObservableArray,
  chatId: PropTypes.number
};

@observer
class ChatWindow extends Component {
  constructor(props) {
    super(props);
    const { user, recipients } = props;

    this.messageStore = new MessageStore(props.chatId);
    this.chat = new ChatStore(user, recipients, this.messageStore);
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
