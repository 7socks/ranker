import React from 'react';

import ItemCard from './ItemCard.js';

class Sorter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: this.props.list,
      blocks: [0, 1],
      merged: [],
      item1: this.props.list[0][0],
      item2: this.props.list[1][0]
    };

    this.select = this.select.bind(this);
  }

  select(selection) {
    console.log(selection);
    let item = this.state[selection];
    let merged = this.state.merged;
    let list = this.state.list;
    merged.push(item);
    console.log(list);

    let block1 = this.state.list[this.state.blocks[0]];
    let block2 = this.state.list[this.state.blocks[1]];
    if (selection === 'item1') {
      block1.splice(block1.indexOf(this.state.item1), 1);
    } else {
      block2.splice(block1.indexOf(this.state.item2), 1);
    }

    if (block1.length === 0 && block2.length > 0) {
      merged = merged.concat(block2);
      block2 = [];
    } else if (block2.length === 0 && block1.length > 0) {
      merged = merged.concat(block1);
      block1 = [];
    }

    let newState = {};
    if (block1.length + block2.length > 0) {
      console.log('option 1')
      list.splice(this.state.blocks[0], 2, block1, block2);
      newState = {
        list: list,
        merged: merged,
        item1: block1[0],
        item2: block2[0]
      };
    } else if (this.state.blocks[1] === this.state.list.length - 1) {
      console.log('option 2')
      list.splice(this.state.blocks[0], 2, merged);
      newState = {
        list: list,
        merged: [],
        blocks: [0, 1],
        item1: list[0] ? list[0][0] : null,
        item2: list[1] ? list[1][0] : null
      };
    } else {
      console.log('option 3')
      list.splice(this.state.blocks[0], 2, merged);
      let newBlocks = [this.state.blocks[0] + 1, this.state.blocks[1] + 1];
      newState = {
        list: list,
        blocks: newBlocks,
        merged: [],
        item1: list[newBlocks[0]][0],
        item2: list[newBlocks[1]][0]
      };
    }

    if (list.length === 1) {
      this.props.finish(list[0]);
    } else {
      this.setState(newState);
    }
  }

  render() {
    return (
      <div className="container sorter-container">
        <h1>Sorting...</h1>
        <p>Select the winner...</p>
        <div className="item-cards">
          <ItemCard id="item1" item={this.state.item1} select={this.select}/>
          <ItemCard id="item2" item={this.state.item2} select={this.select}/>
        </div>
      </div>
    )
  }
}

export default Sorter;