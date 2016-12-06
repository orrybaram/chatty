import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import ChatWindow from './ChatWindow';
import '../styles/index.css';

const propTypes = {
  stores: PropTypes.object
};

@observer
class App extends Component {
  constructor(props) {
    super(props);

    const { UserStore, MessageStore, ChatWindowStore } = props.stores;

    this.userOne = new UserStore(0);
    this.userTwo = new UserStore(1);
    this.messageStore = new MessageStore(0);
    this.chatOne = new ChatWindowStore(this.userOne, [this.userTwo], this.messageStore);
    this.chatTwo = new ChatWindowStore(this.userTwo, [this.userOne], this.messageStore);
  }
  render() {
    return (
      <div className='app'>
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
