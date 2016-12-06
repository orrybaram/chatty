import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';
import shortId from 'shortid';
import classNames from 'classnames';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';

const propTypes = {
  messages: PropTypes.arrayOrObservableArray,
  recipients: PropTypes.arrayOrObservableArray,
  user: PropTypes.objectOrObservableObject
};

class ChatMessages extends Component {
  constructor() {
    super();
    this.messagesWindow = null;
    this.isScrolledToBottom = false;
  }
  componentDidMount() {
    setTimeout(() => {
      this.scrollToBottom();
    }, 250);
  }
  componentWillUpdate() {
    this.isScrolledToBottom = (
      this.messagesWindow.scrollTop === (
        this.messagesWindow.scrollHeight - this.messagesWindow.offsetHeight
      )
    );
  }
  componentDidUpdate() {
    if (this.isScrolledToBottom) {
      this.scrollToBottom();
    }
  }
  scrollToBottom() {
    this.messagesWindow.scrollTop = this.messagesWindow.scrollHeight;
  }
  render() {
    const { messages, recipients, user } = this.props;
    const messageEls = messages.map((msg) => {
      const isUser = user.id === msg.sentBy.id;
      return (
        <ChatMessage
          key={shortId.generate()}
          user={user}
          isUser={isUser}
          message={msg}
        />
      );
    });

    return (
      <div className='chat-window__messages' ref={(ref) => { this.messagesWindow = ref; }}>
        <div>
          {messageEls}
        </div>
        <TypingIndicator recipients={recipients} />
      </div>
    );
  }
}

ChatMessages.propTypes = propTypes;
export default observer(ChatMessages);
