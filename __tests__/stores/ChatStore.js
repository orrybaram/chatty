import ChatStore from '../../src/shared/stores/ChatStore';
import MessageStore from '../../src/shared/stores/MessageStore';

describe('ChatStore', () => {
  const chatStore = new ChatStore({}, [], new MessageStore(0));
  describe('sendMessage', () => {
    it('updates the messages array and clears input', () => {
      chatStore.inputValue = 'beep boop';
      chatStore.sendMessage();
      expect(chatStore.messages[0].body).toBe('beep boop');
      expect(chatStore.inputValue).toBe('');
    });
  });
  describe('updateInput', () => {
    it('updates the inputValue', () => {
      chatStore.inputValue = '';
      chatStore.updateInput({ target: { value: 'beep' } });
      expect(chatStore.inputValue).toBe('beep');
    });
  });
});
