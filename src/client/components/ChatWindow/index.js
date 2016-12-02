import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

const propTypes = {
  user: PropTypes.object,
  recipients: PropTypes.array,
  messages: PropTypes.array
};

@observer
class ChatWindow extends Component {
  render() {
    return (
      <div>Im a chat window</div>
    )
  }
}

ChatWindow.propTypes = propTypes;
export default ChatWindow;
