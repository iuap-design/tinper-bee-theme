import React, { Component } from 'react';
import { Icon } from 'tinper-bee';
import { PartOne } from './components/Part1';
import { PartTwo } from './components/Part2';
import { PartThree } from './components/Part3';
import { PartFour } from './components/Part4';
import { PartFive } from './components/Part5';
import { PartSix } from './components/Part6';
import './index.scss';
let themeDisplay = ['用友红风格', '科技蓝风格', '中兴蓝风格', '华新蓝风格'];
let themeColorVar = ['#F53C32', '#2196F3', '#1A78EB', '#3046C1']

class Theme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeSelectedIndex: 0,
    }

  }
  changeTheme = (themeSelectedIndex) => {
    if (themeSelectedIndex === this.state.themeSelectedIndex) return;
    this.setState({
      themeSelectedIndex
    })
  }

  getComponentHeader = () => {
    let { themeSelectedIndex } = this.state;
    return themeDisplay.map((item, index) => {
      let active = '';
      if (index === themeSelectedIndex) active = 'active'
      return (
        <li key={`theme-display-item-${index}`}
          className={`theme-display-item ${active}`}
          onClick={this.changeTheme.bind(this, index)}
        >
          <span className="theme-display-item-title">{item}</span>
          <span className="theme-display-item-block" style={{ backgroundColor: themeColorVar[index] }}>
            {active && <Icon type="uf-correct"></Icon>}
          </span>
        </li>
      )

    })
  }
  render() {

    return (
      <div className="theme-display">
        <ul className="theme-display-list">
          {this.getComponentHeader()}
        </ul>
        <div htmlFor="" className="theme-line-title">组件效果预览</div>
        <div className="theme-display-content">
          <div className="content-line">
            <PartOne />
          </div>
          <div className="content-line">
            <PartTwo />
          </div>
          <div className="content-line">
            <PartThree />
          </div>
          <div className="content-line">
            <PartFour />
          </div>
          <div className="content-line">
            <PartFive />
          </div>
          <div className="content-line">
            <PartSix />
          </div>
        </div>
        <div className="theme-display-footer">
          <span className="download">开始下载</span>
        </div>
      </div>
    )
  }
}

export default Theme;