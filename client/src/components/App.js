import React from 'react';
import { parseList } from '../util/index.js';

import ListInput from './ListInput.js';
import Sorter from './Sorter.js';
import ResultPage from './ResultPage.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'input',
      list: [],
      ranked: []
    };

    this.startSort = this.startSort.bind(this);
  }

  startSort(list) {
    this.setState({
      view: 'sort',
      list: parseList(list)
    });
  }

  endSort(list) {
    this.setState({
      view: 'results',
      ranked: list
    });
  }

  render() {
    if (this.state.view === 'input') {
      return (
        <ListInput ready={this.startSort}/>
      );
    } else if (this.state.view === 'sort') {
      return (
        <Sorter list={this.state.list} finish={this.endSort}/>
      );
    } else if (this.state.view === 'results') {
      return (
        <ResultPage list={this.state.ranked}/>
      );
    }
  }
}

export default App;