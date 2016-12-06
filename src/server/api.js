import Users from './data/Users';
import Chats from './data/Chats';

export const getUser = id => Users.filter(({ id: userId }) => id === userId)[0];

export const getChatMessages = () => {
  const messages = localStorage.getItem('ChatMessages');
  if (messages) {
    return JSON.parse(messages);
  }
  return [];
};

export const getChatMessagesById = (id) => {
  const allChats = getChatMessages();
  const chat = allChats.filter(({ id: messageId }) => id === messageId)[0];
  if (chat) {
    return chat.messages;
  }
  return [];
};

export const saveChatMessages = ({ id, messages }) => {
  if (id === undefined || !messages) {
    throw new Error('saveChatMessages: missing id or messages');
  }
  const messageStorage = getChatMessages();
  const overwriteIndex = messageStorage.findIndex(x => x.id === id);

  if (overwriteIndex > -1) {
    messageStorage.splice(overwriteIndex, 1);
  }

  messageStorage.push({ id, messages });
  localStorage.setItem('ChatMessages', JSON.stringify(messageStorage));
  return { status: 200 };
};

// Adds a default chat
if (!getChatMessages().length) {
  localStorage.setItem('ChatMessages', JSON.stringify(Chats));
}
