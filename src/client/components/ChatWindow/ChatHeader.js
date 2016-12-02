import React, { PropTypes } from 'react';
import { observer } from 'mobx-react';

const propTypes = {
  prop: PropTypes.object
};

const ChatHeader = (props) => {
  return (
    <div>Im a Header look at me!</div>
  );
}

ChatHeader.propTypes = propTypes;
export default observer(ChatHeader);
