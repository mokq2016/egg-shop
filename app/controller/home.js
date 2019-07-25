'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const results = await this.ctx.service.user.find(10);
    ctx.body = results;
  }
}

module.exports = HomeController;
