import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import ChatWindow from './ChatWindow';
import '../styles/index.css';

const propTypes = {
  stores: PropTypes.object
};

@observer
class App extends Component {
  render() {
    return (
      <div className='app'>
        <ChatWindow
          userId={0}
          recipientIds={[1]}
          chatId={1}
        />
        <ChatWindow
          userId={1}
          recipientIds={[0]}
          chatId={1}
        />
      </div>
    );
  }
}

App.propTypes = propTypes;
export default App;
