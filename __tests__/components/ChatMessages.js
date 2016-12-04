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
    const component = renderer.create(<ChatMessages messages={messages} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

