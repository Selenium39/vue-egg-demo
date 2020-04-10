/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1586445475781_9008';

  // add your middleware config here
  config.middleware = [];

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '15773272279wt..A',
      // 数据库名
      database: 'vue_egg_test',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

   //跨域配置
config.security = {
  csrf: {
    enable: false, // 前后端分离，post请求不方便携带_csrf
    ignoreJSON: true
  },
  domainWhiteList: ['http://localhost:8080'], //配置白名单
};

config.cors = {
  // origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
  credentials: true, // 允许跨域请求携带cookies
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
