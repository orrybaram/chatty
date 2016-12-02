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
          user={{ name: 'Roger' }}
          messages={this.props.stores.message.messages}
          recipients={[]}
        />
        <ChatWindow
          user={{ name: 'Laura' }}
          messages={this.props.stores.message.messages}
          recipients={[]}
        />
      </div>
    );
  }
}

App.propTypes = propTypes;
export default App;
