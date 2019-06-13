import React, { Component } from 'react';
import Home from '../Home';
import Theme from '../Theme';
import './index.scss';
class HomeNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    }

  }
  handleClick = (activeIndex) => {
    if (activeIndex === this.state.activeIndex) return;
    this.setState({
      activeIndex
    })
  }

  render() {
    let { activeIndex } = this.state;
    let Content = Home;
    if (activeIndex == 0) {
      Content = Theme;
    }
    return (
      <div className="tinper-bee-theme-main">
        <ul className="theme-tab">
          <li className={`theme-tab-item ${activeIndex === 0 ? 'theme-tab-item-actived' : ''}`} onClick={e => this.handleClick(0)}>预制</li>
          <li className={`theme-tab-item ${activeIndex === 1 ? 'theme-tab-item-actived' : ''}`} onClick={e => this.handleClick(1)}>自定义</li>
        </ul>
        <Content />
      </div>


    )
  }
}

export default HomeNew;