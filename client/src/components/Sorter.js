import React from 'react';

import ItemCard from './ItemCard.js';

class Sorter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: this.props.list,
      item1: {},
      item2: {}
    };

    this.select = this.select.bind(this);
  }

  select(item) {
  }

  render() {
    return (
      <div className="container sorter-container">
        <h1>Sorting...</h1>
        <p>Select the winner...</p>
        <div className="item-cards">
          <ItemCard item={this.state.item1} select={this.select}/>
          <ItemCard item={this.state.item2} select={this.select}/>
        </div>
      </div>
    )
  }
}

export default Sorter;