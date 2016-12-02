import MessageStore from './MessageStore';
import UIStore from './UIStore';

export default {
  message: new MessageStore(),
  ui: new UIStore()
};
