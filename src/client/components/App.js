import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import ChatWindow from './ChatWindow';

const propTypes = {
  stores: PropTypes.object
};

@observer
class App extends Component {
  render() {
    return (
      <div className='app'>
        <ChatWindow />
        <ChatWindow />
      </div>
    );
  }
}

App.propTypes = propTypes;
export default App;
