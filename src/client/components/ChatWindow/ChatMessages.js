import React from 'react';
import { observer, PropTypes } from 'mobx-react';
import shortId from 'shortid';
import classNames from 'classnames';
import ChatMessage from './ChatMessage';

const propTypes = {
  messages: PropTypes.arrayOrObservableArray,
  recipients: PropTypes.arrayOrObservableArray
};

const ChatMessages = ({ messages, recipients }) => {
  const messageEls = messages.map(msg => <ChatMessage key={shortId.generate()} message={msg} />);

  const typingIndicators = recipients.map((user) => {
    const classes = classNames([
      'typing-indicator',
      { 'typing-indicator--shown': user.isTyping }
    ]);
    return (<div key={shortId.generate()} className={classes}>{user.name} is typing</div>);
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
