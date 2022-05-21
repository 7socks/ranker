import React from 'react';
import { parseList } from '../util/index.js';

import ListInput from './ListInput.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'input'
    };

    this.startSort = this.startSort.bind(this);
  }

  startSort(list) {

  }

  render() {
    if (this.state.view === 'input') {
      return (
        <ListInput ready={this.startSort}/>
      );
    }
  }
}

export default App;