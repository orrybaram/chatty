import ChatStore from './ChatStore';
import UIStore from './UIStore';

export default {
  chat: new ChatStore(),
  ui: new UIStore()
};
