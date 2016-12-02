import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';

const propTypes = {
  prop: PropTypes.object
};

const ChatInput = (props) => {
  return (
    <input placeholder='Send Message' />
  );
}

ChatInput.propTypes = propTypes;
export default observer(ChatInput);
