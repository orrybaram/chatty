import {observable, action} from 'mobx';

export default class MessageStore {
  @observable messages = [];
  constructor(id) {
    this.id = id;
  }
}
