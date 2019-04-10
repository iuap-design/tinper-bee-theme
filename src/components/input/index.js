import React from 'react';
import {Label, FormControl } from 'tinper-bee';
import './index.less';

class TextInput extends React.Component {

  state = {
    inputColor:this.props.defaultValue
  };
 
  handleChange = (value) => {
    this.setState({inputColor:value})
    this.props.handleChange(value);
  };

  render() {
    let {placeholder,label} = this.props;
    return (
      <div className="color-input">
        <Label>{label}</Label>
        <FormControl placeholder={"请输入 " + placeholder}  size="sm" value={this.state.inputColor} onChange={this.handleChange} /> 
      </div>
    )
  }
}

export default TextInput;