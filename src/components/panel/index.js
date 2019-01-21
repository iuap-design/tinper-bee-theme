import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.css';
import logo from 'static/image/logo.jpg';

@withRouter

class Panel extends Component {

  static propTypes = {
    data: PropTypes.object,
    count: PropTypes.number
  };

  static defaultProps = {
    data: {},
    count: 0
  };

  constructor(props) {
    super(props);
    this.state = ({});
  }

  openWin = (name) => {
    const { history } = this.props;
    history.push('/package/' + window.btoa(name));
  }

  render() {
    const {
      name,
      description,
      version,
      author
    } = this.props.data;

    const count = this.props.count
    return (
      <div className="panel um-box">
        <div className="panel-left" onClick={() => { this.openWin(name) }}>
          <img alt={name} src={logo} />
        </div>
        <div className="panel-right um-bf1">
          <h3 onClick={() => { this.openWin(name) }}>{name}</h3>
          <p className="describe">{description || "description"}</p>
          <p className="edition">
            <span className="red">{version}</span> published by <span className="red">{typeof author =='string' ? author : author.name }</span>
          </p>
          <p className="edition">
            <span>下载量</span><span className="red"> &nbsp;&nbsp;{count}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default Panel;