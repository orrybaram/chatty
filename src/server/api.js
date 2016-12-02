import Users from './data/Users';

export const getUser = id => Users.filter(({ id: userId }) => id === userId)[0];

export const getChatMessages = (id) => {
  const ChatMessages = JSON.parse(localStorage.getItem('ChatMessages')) || [];
  return ChatMessages.filter(({ id: chatId }) => id === chatId)[0];
};
