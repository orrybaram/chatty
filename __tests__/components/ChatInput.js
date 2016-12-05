/* eslint-disable import/no-extraneous-dependencies */
import { mount } from 'enzyme';
import React from 'react';
import ChatInput from '../../src/client/components/ChatWindow/ChatInput';

describe('ChatInput', () => {
  it('sends a message onSubmit', () => {
    let sent = false;
    function sendMessage() {
      sent = true;
    }
    const input = mount(<ChatInput inputValue='' sendMessage={sendMessage} />);
    input.find('button').get(0).click();
    expect(sent).toBe(true);
  });
});
