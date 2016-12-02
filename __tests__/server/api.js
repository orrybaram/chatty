import { getUser, getChatMessages } from '../../src/server/api';

const mockChatMessages = [
  {
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
  }
];

beforeAll(() => {
  localStorage.setItem('ChatMessages', JSON.stringify(mockChatMessages));
});

describe('getUser', () => {
  it('gets a user by id', () => {
    expect(getUser(0).name).toBe('Rob');
    expect(getUser(1).name).toBe('Laura');
    expect(getUser(2)).toBeUndefined();
  });
});

describe('getChatMessages', () => {
  it('returns chat history by id', () => {
    const chatHistory = getChatMessages(0);
    expect(chatHistory.id).toBe(0);
    expect(chatHistory.messages.length).toBe(2);
  });

  it('returns undefined if not found', () => {
    const chatHistory = getChatMessages(1);
    expect(chatHistory).toBeUndefined();
  });
});
