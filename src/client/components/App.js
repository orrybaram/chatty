import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import ChatWindow from './ChatWindow';
import UserStore from '../../shared/stores/UserStore';
import MessageStore from '../../shared/stores/MessageStore';
import '../styles/index.css';

const propTypes = {
  stores: PropTypes.object
};

@observer
class App extends Component {
  constructor() {
    super();

    this.userOne = new UserStore(0);
    this.userTwo = new UserStore(1);
    this.messageStore = new MessageStore(0);
  }
  render() {
    return (
      <div className='app'>
        <ChatWindow
          user={this.userOne}
          recipients={[this.userTwo]}
          messageStore={this.messageStore}
        />
        <ChatWindow
          user={this.userTwo}
          recipients={[this.userOne]}
          messageStore={this.messageStore}
        />
      </div>
    );
  }
}

App.propTypes = propTypes;
export default App;
