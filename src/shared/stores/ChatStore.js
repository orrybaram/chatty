import {observable, action} from 'mobx';

export default class ChatStore {
  constructor(id, user) {
    this.id = id;
    this.user = user;
  }

  @observable receivers = [];
  @observable messages = [];
}