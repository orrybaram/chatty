import React from 'react';
import { observer, PropTypes } from 'mobx-react';
import shortId from 'shortid';

const propTypes = {
  recipients: PropTypes.arrayOrObservableArray
};

const ChatHeader = ({ recipients }) => {
  return (
    <div className='chat-window__header'>
      Chatting with { recipients.map(user => user.name) }
      { recipients.map(user => (
        <div
          key={shortId.generate()}
          className='chat-window__header__avatar'
          style={{ backgroundImage: `url(${user.avatarUrl})` }}
        />
      )) }
    </div>
  );
};

ChatHeader.propTypes = propTypes;
export default observer(ChatHeader);
