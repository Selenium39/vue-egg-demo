const Controller = require('egg').Controller
const moment = require('moment')
class ArticleController extends Controller {
      async showAllArticle() {
            const { ctx } = this;
            const result = await ctx.service.articleService.getAllArticle();
            ctx.body = {
                  code: 200,
                  msg: result,

            }
      };

      async showArticle() {
            const { ctx } = this;
            let id = ctx.params.id;
            const result = await ctx.service.articleService.getArticle(id);
            ctx.body = {
                  code: 200,
                  msg: result,
            }
      }

      async addArticle() {
            const { ctx } = this;
            let params = {
                  ...ctx.request.body,
                  createTime: moment().format("YYYY-MM-DD HH:mm:ss")
            }
            const result = await ctx.service.articleService.addArticle(params);
            ctx.body = {
                  code: 200,
                  msg: result
            }

      }
}
module.exports = ArticleController;