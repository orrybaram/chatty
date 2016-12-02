import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import ChatWindow from './ChatWindow';

const propTypes = {
  stores: PropTypes.object
};

@observer
class App extends Component {
  constructor(props) {
    super(props);
    this.chat = props.stores.chat;
    this.sendMessage = this.chat.sendMessage.bind(this.chat);
    this.updateInput = this.chat.updateInput.bind(this.chat);
  }
  render() {
    return (
      <div className='app'>
        <ChatWindow
          user={this.chat.users}
          messages={this.chat.messages}
          recipients={this.chat.users}
          sendMessage={this.sendMessage}
          updateInput={this.updateInput}
          inputValue={this.chat.inputValue}
        />
      </div>
    );
  }
}

App.propTypes = propTypes;
export default App;
