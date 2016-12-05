import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import moment from 'moment';
import classNames from 'classnames';

const propTypes = {
  message: PropTypes.object,
  refreshRate: PropTypes.number,
  isUser: PropTypes.bool
};

@observer
class ChatMessage extends Component {
  constructor() {
    super();
    this.interval = null;
    this.renderCount = 0;
  }
  updateRenderCount() {
    this.setState({renderCount: ++this.renderCount});
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;
  }
  componentDidMount() {
    this.updateRenderCount();
    this.interval = setInterval(/* istanbul ignore next */() => this.updateRenderCount(), this.props.refreshRate || (1000));
  }
  render() {
    const { message, isUser } = this.props;
    const messageClass = classNames([
      'chat-window__messages__message',
      {'chat-window__messages__message--user': isUser}
    ]);
    return (
      <div className={messageClass}>
        <div className='chat-window__messages__message__body'>{message.body}</div>
        <div className='chat-window__messages__message__name'>{message.sentBy.name}</div>
        <div className='chat-window__messages__message__date'>
          {moment(message.dateCreated).fromNow()}
        </div>
        <div
          className='chat-window__messages__message__avatar'
          style={{ backgroundImage: `url(${message.sentBy.avatarUrl})` }}
        />
      </div>
    );
  }
}

ChatMessage.propTypes = propTypes;
export default ChatMessage;
