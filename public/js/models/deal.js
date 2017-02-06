angular.module('dealApp')
  .factory('Deal', Deal);

Deal.$inject = ['$resource'];
function Deal($resource) {
  return new $resource('/deals/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
