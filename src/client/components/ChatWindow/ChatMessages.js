import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';
import ChatMessage from './ChatMessage';

const propTypes = {
  messages: PropTypes.array
};

const ChatMessages = ({ messages }) => {
  const messageEls = messages.map(msg => <ChatMessage message={msg} />);
  return (
    <div className='chat-window__messages'>
      { messageEls }
    </div>
  );
};

ChatMessages.propTypes = propTypes;
export default observer(ChatMessages);
