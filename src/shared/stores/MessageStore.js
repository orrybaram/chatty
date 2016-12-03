import {observable, action} from 'mobx';
import { getChatMessagesById, saveChatMessages } from '../../server/api';

export default class MessageStore {
  @observable messages = [];
  constructor(id) {
    this.id = id;
    this.messages = getChatMessagesById(this.id);
  }

  @action saveMessages() {
    saveChatMessages({id: this.id, messages: this.messages});
  }
}
