import React from 'react';
import { observer, PropTypes } from 'mobx-react';
import shortId from 'shortid';
import classNames from 'classnames';

const propTypes = {
  recipients: PropTypes.arrayOrObservableArray
};

const ChatHeader = ({ recipients }) => (
  <div className='chat-window__header'>
    <div className='chat-window__header__recipients'>
      { recipients.map((user) => {
        const activityClass = classNames([
          'header__recipient__activity-monitor',
          { 'header__recipient__activity-monitor--active': user.isActive }
        ]);
        return (
          <div key={shortId.generate()} className='chat-window__header__recipients__recipient'>
            <div
              className='header__recipient__avatar'
              style={{ backgroundImage: `url(${user.avatarUrl})` }}
            />
            <div className='header__recipient__name'>{user.name}</div>
            <div className={activityClass} />
          </div>
        );
      })}
    </div>
  </div>
);


ChatHeader.propTypes = propTypes;
export default observer(ChatHeader);
