import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import ChatWindow from './ChatWindow';

const propTypes = {
  stores: PropTypes.object
};

@observer
class App extends Component {
  render() {
    const chat = this.props.stores.chat;
    return (
      <div className='app'>
        <ChatWindow user={chat.users} messages={chat.messages} recipients={chat.users} />
        <ChatWindow user={{}} messages={[]} recipients={[]} />
      </div>
    );
  }
}

App.propTypes = propTypes;
export default App;
