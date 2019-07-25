'use strict';

const Service = require('egg').Service;

class User extends Service {
  async find(id) {
    const user = await this.ctx.model.User.findByPk(id);
    if (!user) {
      this.ctx.throw(404, 'user not found');
    }
    return user;
  }
}
module.exports = User;
