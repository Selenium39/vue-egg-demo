'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/article',controller.articleController.showAllArticle);
  router.get('/article/:id',controller.articleController.showArticle);
  router.post('/article',controller.articleController.addArticle);
};
