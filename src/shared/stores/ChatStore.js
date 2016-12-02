import { observable, action } from 'mobx';

export default class ChatStore {
  @observable recipients = [];
  @observable messages = [];
  @observable inputValue = '';

  constructor(user, recipients, messages) {
    this.user = user;
    this.recipients = recipients;
    this.messages = messages;
  }

  @action sendMessage() {
    const message = {
      body: this.inputValue,
      dateCreated: new Date()
    };
    this.messages.push(message);
    this.inputValue = '';
  }

  @action updateInput(e) {
    this.inputValue = e.target.value;
  }
}
