import React from 'react';

class ListInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  };

  handleClick(e) {
    e.preventDefault();
    this.props.ready(this.state.text);
  }

  render() {
    let valid = !!this.state.text.match(/.\n./g);
    return (
      <div className="container list-input-container">
        <h1>Your List</h1>
        <p>Write each item on a separate line</p>
        <textarea name="list" value={this.state.text} onChange={this.handleChange}/>
        <button onClick={this.handleClick} disabled={!valid}>Go</button>
      </div>
    );
  }
}

export default ListInput;