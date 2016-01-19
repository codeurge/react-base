import React from 'react';
import { connect } from 'react-redux';
import { counterIncremented } from '../action_creators'
import { incrementCounter } from '../api';
import { _ } from 'lodash';

var CounterContainer = connect((state) => { return { count: state.count } })(React.createClass({
  render: function() {
    return (
      <p>Hello World!</p>
    )
  }
}));

export default CounterContainer;
