import React from 'react';
import { observer, PropTypes } from 'mobx-react';
import classNames from 'classnames';
import shortId from 'shortid';

const propTypes = {
  recipients: PropTypes.arrayOrObservableArray
};

const TypingIndicator = ({ recipients }) => {
  const typingIndicators = recipients.map((_user) => {
    const classes = classNames([
      'typing-indicator',
      { 'typing-indicator--shown': _user.isTyping }
    ]);
    return (<div key={shortId.generate()} className={classes}>{_user.name} is typing</div>);
  });

  return (
    <div className='chat-window__typing-indicators'>
      {typingIndicators}
    </div>
  );
};

TypingIndicator.propTypes = propTypes;
export default observer(TypingIndicator);
