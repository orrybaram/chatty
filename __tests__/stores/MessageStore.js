import MessageStore from '../../src/shared/stores/MessageStore';

describe('ChatStore', () => {
  const messageStore = new MessageStore(1);

  it('saves messages to localStorage and then loads them', () => {
    messageStore.messages = [
      { body: 'hi' }, { body: 'sup' }
    ];
    messageStore.saveMessages();
    messageStore.messages = [];
    messageStore.loadMessages();
    expect(messageStore.messages[0].body).toBe('hi');
  });
});
