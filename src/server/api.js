import Users from './data/Users';

export const getUser = id => Users.filter(({ id: userId }) => id === userId)[0];

export const getChatMessages = () => {
  const messages = localStorage.getItem('ChatMessages');
  if (messages) {
    return JSON.parse(messages);
  }
  return [];
};

export const getChatMessagesById = (id) => {
  const messages = getChatMessages();
  return messages.filter(({ id: messageId }) => id === messageId)[0];
};

export const saveChatMessages = ({ id, messages }) => {
  if (id === undefined || !messages) {
    throw new Error('Error: Invalid message structure');
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
