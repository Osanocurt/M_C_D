angular.module('dealApp')
  .factory('Article', Article);

Article.$inject = ['$resource'];
function Article($resource) {
  return new $resource('/articles/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
