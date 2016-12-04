import React  from 'react';
import { observer, PropTypes } from 'mobx-react';

const propTypes = {
  recipients: PropTypes.arrayOrObservableArray
};

const ChatHeader = ({ recipients }) => {
  return (
    <div className='chat-window__header'>
      Chatting with { recipients.map(user => user.name) }
    </div>
  );
};

ChatHeader.propTypes = propTypes;
export default observer(ChatHeader);
