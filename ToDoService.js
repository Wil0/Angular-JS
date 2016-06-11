toDoApp.service('ToDoService', ['$http', 'ToDoFactory', function($http, ToDoFactory) {
  this.getAll = function() {
    var todos = [];
    _fetchTodosFromApi(todos);
    return todos;
  };

  function _fetchTodosFromApi(todos) {
    $http.get('http://quiet-beach-24792.herokuapp.com/todos.json')
      .then(function(response) {
      _handleResponseFromApi(response.data, todos);
      }, function(err) {});
  }

  function _handleResponseFromApi(data, todos) {
      data.forEach(function(element) {
      todos.push(new ToDoFactory(element.text, element.completed));
    });
  }
}]);
