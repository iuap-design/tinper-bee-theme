import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'bee-button';
import Icon from 'bee-icon';
import './index.less';

class LocalTheme extends Component {

  constructor(props) {
    super(props); 

  } 

  render() {
    const { currentTheme, imgName, title } = this.props;
    return (
      <div className={`local-theme-demo ${this.props.className}`}>
        <img src={require(`../../static/image/${imgName}`)} alt="云平台主题"/>
        <p>{title}</p>
        {
            currentTheme? 
            <Icon type="uf-correct"></Icon> 
            : 
            <Button shape="round" colors="primary" onClick={this.props.handleClick}>预览</Button>
        }
      </div>
    )
  }
}

export default LocalTheme;