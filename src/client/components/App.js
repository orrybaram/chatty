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
        <ChatWindow user={{}} messages={[]} recipients={[]} />
        <ChatWindow user={{}} messages={[]} recipients={[]} />
      </div>
    );
  }
}

App.propTypes = propTypes;
export default App;
