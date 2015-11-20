var React = require('react');
var ReactDOM = require('react-dom');


var Counter = React.createClass({
  render: function() {
    return (
      <p>Hello World!</p>
    )
  }
});

ReactDOM.render(<Counter />, document.getElementById('counter'));
