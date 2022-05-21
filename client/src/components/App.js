import React from 'react';
import { parseList } from '../util/index.js';

import ListInput from './ListInput.js';
import Sorter from './Sorter.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'input',
      list: []
    };

    this.startSort = this.startSort.bind(this);
  }

  startSort(list) {
    this.setState({
      view: 'sort',
      list: list
    })
  }

  render() {
    if (this.state.view === 'input') {
      return (
        <ListInput ready={this.startSort}/>
      );
    } else if (this.state.view === 'sort') {
      return (
        <Sorter list={this.state.list}/>
      );
    }
  }
}

export default App;