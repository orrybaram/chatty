import {observable, action} from 'mobx';
import { getUser } from '../../server/api';

export default class UserStore {
  @observable isTyping = false;
  @observable isActive = false;

  constructor(id) {
    const user = getUser(id);
    this.name = user.name;
    this.avatarUrl = user.avatarUrl;
  }
}
