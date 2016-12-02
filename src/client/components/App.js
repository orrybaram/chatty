import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';

const propTypes = {
  stores: PropTypes.object
};

@observer
export default class App extends Component {
  render() {
    return (
      <div>Im a chat</div>
    )
  }
}
