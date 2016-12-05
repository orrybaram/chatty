import ChatWindowStore from '../../src/shared/stores/ChatWindowStore';
import MessageStore from '../../src/shared/stores/MessageStore';

describe('ChatWindowStore', () => {
  const chatWindowStore = new ChatWindowStore({}, [], new MessageStore(0));
  describe('sendMessage', () => {
    it('updates the messages array and clears input', () => {
      chatWindowStore.inputValue = 'beep boop';
      chatWindowStore.sendMessage();
      expect(chatWindowStore.messages[0].body).toBe('beep boop');
      expect(chatWindowStore.inputValue).toBe('');
    });
  });
  describe('updateInput', () => {
    it('updates the inputValue', () => {
      chatWindowStore.inputValue = '';
      chatWindowStore.updateInput({ target: { value: 'beep' } });
      expect(chatWindowStore.inputValue).toBe('beep');
    });
  });
});
