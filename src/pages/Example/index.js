import React, { Component } from 'react';
import './index.scss';
import ExampleGrid from './ExampleGrid';
import ExampleSearch from './ExampleSearch';

const defaultProps = {
  clsPrefix: "tinper-bee-theme",
  colors: "default"
};

class Example extends Component {

  constructor(props) {
    super(props);
  }
   
  render() {
    let {clsPrefix} = this.props;
    return (
      <div className={`${clsPrefix}-example`}>
        <ExampleSearch {...this.props} /> 
        <ExampleGrid {...this.props} />
      </div>
    )
  }
}
Example.defaultProps = defaultProps;
export default Example;