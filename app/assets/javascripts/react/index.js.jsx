import React from 'react';
import ReactDOM from 'react-dom';

var Counter = React.createClass({
  render() {
    return (
      <p>Hello World!</p>
    )
  }
});

ReactDOM.render(<Counter />, document.getElementById('counter'));
