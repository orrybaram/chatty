import { observable, action } from 'mobx';

export default class ChatStore {
  @observable recipients = [];
  @observable messages = [];
  @observable inputValue = '';

  constructor(id, user, recipients) {
    this.id = id;
    this.user = user;
    this.recipients = recipients;
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
