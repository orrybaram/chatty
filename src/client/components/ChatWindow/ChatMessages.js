import React from 'react';
import { observer, PropTypes } from 'mobx-react';
import ChatMessage from './ChatMessage';

const propTypes = {
  messages: PropTypes.arrayOrObservableArray
};

const ChatMessages = ({ messages }) => {
  const messageEls = messages.map((msg, i) => <ChatMessage key={i} message={msg} />);
  return (
    <div className='chat-window__messages'>
      { messageEls }
    </div>
  );
};

ChatMessages.propTypes = propTypes;
export default observer(ChatMessages);
