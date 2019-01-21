import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class Button extends Component {

  constructor(props) {
    super(props); 

  } 

  render() {
    const count = this.props.count
    return (
      <div className={`ac-button ${this.props.className}`} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    )
  }
}

export default Button;