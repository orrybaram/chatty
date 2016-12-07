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
    /* istanbul ignore next */
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
    /* istanbul ignore next */
    if (this.isScrolledToBottom) {
      this.scrollToBottom();
    }
  }
  /* istanbul ignore next */
  scrollToBottom() {
    this.messagesWindow.scrollTop = this.messagesWindow.scrollHeight;
  }
  render() {
    const { messages, recipients, user } = this.props;
    let messageEls = messages.map((msg) => {
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

    if (!messageEls.length) {
      messageEls = (
        <div className='chat-window__messages__no-messages'>
          This is the beginning of your conversation with&nbsp;
          {recipients.map(_user => _user.name).join(',') }
        </div>
      );
    }

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
