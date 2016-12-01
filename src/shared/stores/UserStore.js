import {observable, action} from 'mobx';

export default class UserStore {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  @observable isTyping = false;
  @observable isActive = false;
}
