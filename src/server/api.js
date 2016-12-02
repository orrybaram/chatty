import Users from './data/Users';

const ChatHistory = localStorage.getItem('ChatHistory') || [];

export const getUser = id => Users.filter(({ id: userId }) => id === userId)[0];
export const getChatHistory = id => ChatHistory.filter(({ id: chatId }) => id === chatId)[0];
