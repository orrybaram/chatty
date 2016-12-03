import React from 'react';
import { observer, PropTypes } from 'mobx-react';
import shortId from 'shortid';
import ChatMessage from './ChatMessage';

const propTypes = {
  messages: PropTypes.arrayOrObservableArray
};

const ChatMessages = ({ messages }) => {
  const messageEls = messages.map(msg => <ChatMessage key={shortId.generate()} message={msg} />);
  return (
    <div className='chat-window__messages'>
      { messageEls }
    </div>
  );
};

ChatMessages.propTypes = propTypes;
export default observer(ChatMessages);
