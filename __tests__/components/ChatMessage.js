/* eslint-disable import/no-extraneous-dependencies */
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import ChatMessage from '../../src/client/components/ChatWindow/ChatMessage';

describe('ChatMessage', () => {
  it('renders correctly', () => {
    const message = {
      body: 'yo',
      dateCreated: new Date(),
      sentBy: { name: 'gary' }
    };
    const component = renderer.create(<ChatMessage message={message} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('refreshes every X amount of miliseconds', () => {
    const message = {
      body: 'yo',
      dateCreated: new Date(),
      sentBy: { name: 'bags' }
    };

    const chatMessage = mount(<ChatMessage message={message} refreshRate={100} />);
    expect(chatMessage.state('renderCount')).toBe(1);
    setTimeout(() => {
      expect(chatMessage.state('renderCount')).toBe(2);
    }, 200);

    const instance = chatMessage.instance();
    expect(instance.interval).toBeTruthy();
    chatMessage.unmount();
    expect(instance.interval).toBe(null);
  });
});
