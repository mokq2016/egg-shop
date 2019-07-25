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
  config.keys = appInfo.name + '_1564037621409_6802';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    /* mysql: {
      // 单数据库信息配置
      client: {
        // host
        host: '47.107.225.70',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: '123456qW',
        // 数据库名
        database: 'shop',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },*/
    sequelize: {
      dialect: 'mysql',
      host: '47.107.225.70',
      port: 3306,
      database: 'mall_schema',
      user: 'root',
      // 密码
      password: '123456qW',

      define: {
        freezeTableName: true,
        timestamps: false,
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
