let Mock = require('mockjs');

// 引入资源
const list = require('./home/list.json');

// Mock数据
Mock.mock('/api/list', list);