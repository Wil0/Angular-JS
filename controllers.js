toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
  // Save this to a variable as this can change depending on the context of
  // where it is being called, see
  // https://github.com/johnpapa/angular-styleguide/tree/master/a1#style-y032
  var self = this;

  self.todos = [];

  self.addToDo = function(todoText) {
    // now, no matter what, we'll push new ToDos
    // to the controller.
    self.todos.push(new ToDoFactory(todoText));
  };

  self.removeToDo = function() {
    self.todos.pop();
  };
}]);
