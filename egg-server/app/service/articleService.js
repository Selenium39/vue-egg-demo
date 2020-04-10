const Service = require('egg').Service

class ArticleService extends Service {
    async getAllArticle() {
        const result = await this.app.mysql.select('article');
        return result;
    }

    async getArticle(id) {
        const result = await this.app.mysql.get('article', { 'id': id });
        return result;
    }

    async addArticle(params){
        const result = await this.app.mysql.insert('article',params);
    }
}

module.exports = ArticleService