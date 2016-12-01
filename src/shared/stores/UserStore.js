import {observable, action} from 'mobx';

export default class UserStore {
  @observable isTyping = false;
  @observable isActive = false;

  constructor({id, name, avatarUrl}) {
    this.id = id;
    this.name = name;
    this.avatarUrl = avatarUrl;
  }
}
