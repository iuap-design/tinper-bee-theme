import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'bee-button';
import Icon from 'bee-icon';
import './index.less';

let img1 = require('../../static/image/主题模板-云平台.png');
let img2 = require('../../static/image/主题模板-营销云.png');
let img3 = require('../../static/image/主题模板-ncc.png');

class LocalTheme extends Component {

  constructor(props) {
    super(props); 
  } 

  preview(index){
    this.props.handleClick(index);
  }

  render() {
    const { title, index, activeNum } = this.props;
    let thumbnail = [
      <img src={img1} alt="云平台主题"/>,
      <img src={img2} alt="营销云主题"/>,
      <img src={img3} alt="NCC主题"/>
    ];
    return (
      <div className={`local-theme-demo ${this.props.className}`}>
        {thumbnail[index]}
        <p>{title}</p>
        {
          activeNum === index? 
          <Icon type="uf-correct"></Icon> 
          : 
          <Button shape="round" colors="primary" onClick={() => this.preview(index)}>预览</Button>
        }
      </div>
    )
  }
}

export default LocalTheme;