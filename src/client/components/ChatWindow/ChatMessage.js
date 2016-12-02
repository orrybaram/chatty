import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';

const propTypes = {
  message: PropTypes.object
};

const ChatMessage = ({ message }) => (
  <div className='chat-window__messages__message'>
    {message.body}
  </div>
);

ChatMessage.propTypes = propTypes;
export default observer(ChatMessage);
