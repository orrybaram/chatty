import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';

const propTypes = {
  sendMessage: PropTypes.func,
  inputValue: PropTypes.string,
  updateInput: PropTypes.func
};

const ChatInput = ({ sendMessage, updateInput, inputValue }) => {
  function onSubmit(e) {
    e.preventDefault();
    sendMessage();
  }

  return (
    <form onSubmit={onSubmit}>
      <input value={inputValue} placeholder='Send Message' onChange={updateInput} />
      <button>Send</button>
    </form>
  );
};

ChatInput.propTypes = propTypes;
export default observer(ChatInput);
