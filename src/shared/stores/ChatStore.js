import {observable, action} from 'mobx';

export default class ChatStore {
  @observable users = [];
  @observable messages = [];

  constructor(id, users) {
    this.id = id;
    this.users = users;
  }
}