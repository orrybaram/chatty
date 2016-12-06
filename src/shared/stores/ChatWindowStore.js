import { observable, action } from 'mobx';

export default class ChatWindowStore {
  @observable recipients = [];
  @observable messages = [];
  @observable inputValue = '';

  constructor(user, recipients, messageStore) {
    this.user = user;
    this.recipients = recipients;
    this.messageStore = messageStore;
    this.messages = this.messageStore.messages;

    this.typingTimeout = null;
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
    this.showUserIsTyping();
  }

  @action showUserIsTyping(timeout) {
    this.user.isTyping = true;
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
    // /* istanbul ignore next */
    this.typingTimeout = setTimeout(() => (
      this.user.isTyping = false
    ), (timeout || 2000));
  }
}
