angular.module('dealApp')
  .controller('DealsIndexController', DealsIndexController)
  .controller('DealsNewController', DealsNewController)
  .controller('DealsShowController', DealsShowController)
  .controller('DealsEditController', DealsEditController);


DealsIndexController.$inject = ['Deal'];
function DealsIndexController(Deal) {
  const dealsIndex = this;

  dealsIndex.all = Deal.query();
}

DealsNewController.$inject = ['Deal', '$state'];
function DealsNewController(Deal, $state) {
  const dealsNew = this;

  dealsNew.deal = {};

  function create() {
    Deal.save(dealsNew.deal, () => {
      $state.go('dealsIndex');
    });
  }

  dealsNew.create = create;
}

DealsShowController.$inject = ['Deal', '$state', '$auth'];
function DealsShowController(Deal, $state, $auth) {
  const dealsShow = this;

  dealsShow.deal = Deal.get($state.params);

  function deleteDeal() {
    dealsShow.deal.$remove(() => {
      $state.go('dealsIndex');
    });
  }

  dealsShow.delete = deleteDeal;
  dealsShow.isLoggedIn = $auth.isAuthenticated;
}

DealsEditController.$inject = ['Deal', '$state'];
function DealsEditController(Deal, $state) {
  const dealsEdit = this;

  dealsEdit.deal = Deal.get($state.params);

  function update() {
    dealsEdit.deal.$update(() => {
      $state.go('dealsShow', $state.params);
    });
  }

  this.update = update;

}
