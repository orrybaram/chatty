import React from 'react';
import { observer, PropTypes } from 'mobx-react';
import shortId from 'shortid';
import classNames from 'classnames';
import ChatMessage from './ChatMessage';

const propTypes = {
  messages: PropTypes.arrayOrObservableArray,
  recipients: PropTypes.arrayOrObservableArray,
  user: PropTypes.objectOrObservableObject
};

const ChatMessages = ({ messages, recipients, user }) => {
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
    <div className='chat-window__messages'>
      {messageEls}
      <div className='chat-window__messages__typing-indicators'>
        {typingIndicators}
      </div>
    </div>
  );
};

ChatMessages.propTypes = propTypes;
export default observer(ChatMessages);
