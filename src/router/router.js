import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

// 按需加载
import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!pages/Home';
// import Package from 'bundle-loader?lazy&name=package!pages/Package';
// import Search from 'bundle-loader?lazy&name=package!pages/Search';
// import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo';
// import Sign from 'bundle-loader?lazy&name=userInfo!pages/Sign';
// import Setting from 'bundle-loader?lazy&name=Setting!pages/Setting'
// import Publish from 'bundle-loader?lazy&name=Publish!pages/Publish'
// import Guide from 'bundle-loader?lazy&name=Publish!pages/Guide'

// import Header from '../containers/header';
// import Links from '../containers/links';

const Loading = function () {
  return <div></div>
};

const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading />
    }
  </Bundle>
);

const getRouter = () => (
  <div>
    
    <Router>
      <div>
        {/* <Header />
        <Links /> */}
        <Switch >
            <Route exact path="/" component={createComponent(Home)} />
            {/* <Route path="/package/:data" component={createComponent(Package)} />
            <Route path="/search/:data?" component={createComponent(Search)} />
            <Route path="/userinfo" component={createComponent(UserInfo)} />
            <Route path="/login" component={createComponent(Sign)} />
            <Route path="/setting" component={createComponent(Setting)} />
            <Route path="/publish" component={createComponent(Publish)} />
            <Route path="/guide" component={createComponent(Guide)} /> */}
          </Switch>
      </div>
    </Router>
  </div>
);

export default getRouter;