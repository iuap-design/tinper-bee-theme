import React from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';
const hexRgb = require('hex-rgb');
// import { PhotoshopPicker } from 'react-color'
import {Label, FormControl } from 'tinper-bee';
import './index.less';

const _defaultColor = "#E25751";

class PhotoshopPickerComp extends React.Component {

  constructor(props) {
    super(props);
    let color = (props.defaultValue?props.defaultValue:_defaultColor);
    let {red:r,green:g,blue:b,alpha:a}  = hexRgb(color);
    this.state = {
      color:{ r,g,b,a,},
      displayColorPicker: false,
      inputColor:color
    }
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ 
      color: color.rgb,
      inputColor:color.hex
    });
    // this.props.handleChange({[this.props.name]:color.hex});
    let _color = color.rgb.r +","+color.rgb.g +","+color.rgb.b +","+color.rgb.a;
    this.props.handleChange(_color);
  };

  render() {
    console.log("---this.state.color--",this.state.color);
    const styles = reactCSS({
      'default': {
        color: {
          width: '14px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
          right: '0px',
          top: '33px',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });

    let {placeholder,label} = this.props;
    return (
      <div className="color-input">

        <Label>{label}</Label>
        <FormControl placeholder={placeholder} value={this.state.inputColor} onChange={(value)=>{this.setState({inputColor:value})}} /> 

        <div className="color" style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
        </div> : null }

      </div>
    )
  }
}

export default PhotoshopPickerComp;