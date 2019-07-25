'use strict';
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const User = app.model.define('user', {
    userid: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(32),
    password: STRING(32),
    email: STRING(32),
    address: STRING(32),
    ip: STRING(32),
    phone: STRING(11),
    createtime: STRING(11),
  });
  return User;
};
