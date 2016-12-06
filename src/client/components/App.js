import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import ChatWindow from './ChatWindow';
import UserStore from '../../shared/stores/UserStore';
import MessageStore from '../../shared/stores/MessageStore';
import ChatWindowStore from '../../shared/stores/ChatWindowStore';
import DevTools from 'mobx-react-devtools';
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
    this.chatOne = new ChatWindowStore(this.userOne, [this.userTwo], this.messageStore);
    this.chatTwo = new ChatWindowStore(this.userTwo, [this.userOne], this.messageStore);
  }
  render() {
    return (
      <div className='app'>
        <DevTools />
        <ChatWindow
          chatStore={this.chatOne}
        />
        <ChatWindow
          chatStore={this.chatTwo}
        />
      </div>
    );
  }
}

App.propTypes = propTypes;
export default App;
