/* eslint-disable import/no-extraneous-dependencies */
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import ChatMessages from '../../src/client/components/ChatWindow/ChatMessages';

describe('ChatMessages', () => {
  it('renders correctly', () => {
    const messages = [{
      body: 'yo',
      dateCreated: new Date(),
      sentBy: { name: 'gary' }
    }, {
      body: 'sup',
      dateCreated: new Date(),
      sentBy: { name: 'bags' }
    }];
    const component = renderer.create(
      <ChatMessages
        user={{}}
        recipients={[]}
        messages={messages}
      />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('shows a typing indicator when a recipient is typing', () => {
    const recipients = [{
      name: 'gary',
      isTyping: false
    }];
    const component = mount(<ChatMessages recipients={recipients} messages={[]} />);
    expect(component.find('.typing-indicator').get(0).className).toBe('typing-indicator');
    component.setProps({ recipients: [{
      name: 'gary',
      isTyping: true
    }] });
    expect(component.find('.typing-indicator').get(0).className).toBe('typing-indicator typing-indicator--shown');
  });
});
