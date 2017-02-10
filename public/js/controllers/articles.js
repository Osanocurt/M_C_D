angular.module('dealApp')
  .controller('ArticlesIndexController', ArticlesIndexController)
  .controller('ArticlesNewController', ArticlesNewController)
  .controller('ArticlesShowController', ArticlesShowController)
  .controller('ArticlesEditController', ArticlesEditController);


ArticlesIndexController.$inject = ['Article'];
function ArticlesIndexController(Article) {
  const articlesIndex = this;

  articlesIndex.all = Article.query();
}

ArticlesNewController.$inject = ['Article', '$state'];
function ArticlesNewController(Article, $state) {
  const articlesNew = this;

  articlesNew.article = {};

  function create() {
    Article.save(articlesNew.article, () => {
      $state.go('articlesIndex');
    });
  }

  articlesNew.create = create;
}

ArticlesShowController.$inject = ['Article', '$state', '$auth'];
function ArticlesShowController(Article, $state, $auth) {
  const articlesShow = this;

  articlesShow.article = Article.get($state.params);

  function deleteArticle() {
    articlesShow.article.$remove(() => {
      $state.go('articlesIndex');
    });
  }

  articlesShow.delete = deleteArticle;
  articlesShow.isLoggedIn = $auth.isAuthenticated;
}

ArticlesEditController.$inject = ['Article', '$state'];
function ArticlesEditController(Article, $state) {
  const articlesEdit = this;

  articlesEdit.article = Article.get($state.params);

  function update() {
    articlesEdit.article.$update(() => {
      $state.go('articlesShow', $state.params);
    });
  }

  this.update = update;

}
