import { observable, action } from 'mobx';

export default class ChatStore {
  @observable recipients = [];
  @observable messages = [];
  @observable inputValue = '';

  constructor(user, recipients, messageStore) {
    this.user = user;
    this.recipients = recipients;
    this.messageStore = messageStore;
    this.messages = this.messageStore.messages;
  }

  @action sendMessage() {
    const message = {
      body: this.inputValue,
      dateCreated: new Date(),
      sentBy: this.user
    };
    this.messages.push(message);
    this.inputValue = '';
    this.messageStore.saveMessages();
  }

  @action updateInput(e) {
    this.inputValue = e.target.value;
  }
}
