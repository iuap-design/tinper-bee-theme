import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// 引入路由
import getRouter from 'router/router';
// 引入css样式
import './static/style/um.css';
import './static/style/markdown.css';

/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
  module.hot.accept('./router/router', () => {
    const getRouter = require('router/router').default;
    renderWithHotReload(getRouter());
  });
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      {RootElement}
    </AppContainer>,
    document.getElementById('app')
  )
}