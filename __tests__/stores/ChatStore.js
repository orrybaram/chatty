import ChatStore from '../../src/shared/stores/ChatStore';

describe('ChatStore', () => {
  const chat = new ChatStore({}, [], []);
  describe('sendMessage', () => {
    it('updates the messages array and clears input', () => {
      chat.inputValue = 'beep boop';
      chat.sendMessage();
      expect(chat.messages[0].body).toBe('beep boop');
      expect(chat.inputValue).toBe('');
    });
  });
  describe('updateInput', () => {
    it('updates the inputValue', () => {
      chat.inputValue = '';
      chat.updateInput({ target: { value: 'beep' } });
      expect(chat.inputValue).toBe('beep');
    });
  });
});
