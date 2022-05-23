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
    this.endSort = this.endSort.bind(this);
    this.restart = this.restart.bind(this);
  }

  startSort(list) {
    let parsed = parseList(list);
    if (parsed.length > 1) {
      this.setState({
        view: 'sort',
        list: parseList(list)
      });
    }
  }

  endSort(list) {
    this.setState({
      view: 'results',
      ranked: list
    });
  }

  restart(e) {
    e.preventDefault();
    this.setState({
      view: 'input',
      list: [],
      ranked: []
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
        <ResultPage list={this.state.ranked} restart={this.restart}/>
      );
    }
  }
}

export default App;