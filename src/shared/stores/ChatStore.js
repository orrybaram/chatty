import { observable, action } from 'mobx';

export default class ChatStore {
  @observable recipients = [];
  @observable messages = [];
  @observable inputValue = '';

  constructor(id, user) {
    this.id = id;
    this.user = user;
  }

  @action sendMessage(body) {
    const message = {
      body: this.inputValue,
      dateCreated: new Date()
    };
    this.messages.push(message);
    this.inputValue = '';
  }

  @action updateInput(e) {
    console.log(e.target.value);
    this.inputValue = e.target.value;
  }
}
