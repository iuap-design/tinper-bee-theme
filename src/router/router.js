import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';

// 按需加载
import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!pages/HomeNew';
// import Template from 'bundle-loader?lazy&name=template!pages/Template';

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
            {/* <Route exact path="/" component={createComponent(Template)} /> */}
            {/* <Route path="/package/:data" component={createComponent(Package)} />
            <Route path="/guide" component={createComponent(Guide)} /> */}
          </Switch>
      </div>
    </Router>
  </div>
);

export default getRouter;