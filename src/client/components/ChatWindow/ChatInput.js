import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';

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

  const sendButtonClass = classNames([
    'chat-window__input-form__send-button',
    { 'chat-window__input-form__send-button--shown': inputValue.length }
  ]);

  return (
    <form className='chat-window__input-form' onSubmit={onSubmit}>
      <input
        className='chat-window__input-form__input'
        value={inputValue} placeholder='Your message'
        onChange={updateInput}
      />
      <button className={sendButtonClass}><i className='fa fa-paper-plane' /></button>
    </form>
  );
};

ChatInput.propTypes = propTypes;
export default observer(ChatInput);
