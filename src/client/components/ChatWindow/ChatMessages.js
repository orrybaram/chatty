import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';
import shortId from 'shortid';
import classNames from 'classnames';
import ChatMessage from './ChatMessage';

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
    // Kind of a hack, the dom isn't fully painted when this is called
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

    const typingIndicators = recipients.map((_user) => {
      const classes = classNames([
        'typing-indicator',
        { 'typing-indicator--shown': _user.isTyping }
      ]);
      return (<div key={shortId.generate()} className={classes}>{_user.name} is typing</div>);
    });

    return (
      <div className='chat-window__messages' ref={(ref) => { this.messagesWindow = ref; }}>
        {messageEls}
        <div className='chat-window__messages__typing-indicators'>
          {typingIndicators}
        </div>
      </div>
    );
  }
}

ChatMessages.propTypes = propTypes;
export default observer(ChatMessages);
