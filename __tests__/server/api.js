import { getUser, getChatMessagesById, saveChatMessages } from '../../src/server/api';

const mockChatMessage = {
  id: 0,
  messages: [
    {
      body: 'Hi',
      dateCreated: '12/2/2016',
      sentBy: {
        name: 'Bags'
      }
    },
    {
      body: 'Sup',
      dateCreated: '12/2/2016',
      sentBy: {
        name: 'Gary'
      }
    }
  ]
};

describe('getUser', () => {
  it('gets a user by id', () => {
    expect(getUser(0).name).toBe('Rob');
    expect(getUser(1).name).toBe('Laura');
    expect(getUser(2)).toBeUndefined();
  });
});

describe('saveChatMessages', () => {
  it('throws if an id or messages array isn\'t provided', () => {
    expect(() => saveChatMessages({ messages: [] })).toThrow();
    expect(() => saveChatMessages({ id: 1 })).toThrow();
  });
  it('returns with a 200 if saved', () => {
    expect(saveChatMessages(mockChatMessage)).toEqual({ status: 200 });
  });
});

describe('getChatMessagesById', () => {
  it('returns chat history by id', () => {
    const chatHistory = getChatMessagesById(0);
    expect(chatHistory.id).toBe(0);
    expect(chatHistory.messages.length).toBe(2);
  });

  it('returns undefined if not found', () => {
    const chatHistory = getChatMessagesById(1);
    expect(chatHistory).toBeUndefined();
  });
});
