toDoApp.controller('ToDoController', function() {
  // Save this to a variable as this can change depending on the context of
  // where it is being called, see
  // https://github.com/johnpapa/angular-styleguide/tree/master/a1#style-y032
  var self = this;

  self.todos = [{ text: "ToDo1", completed: true }, { text: "ToDo2", completed: false }];

  self.addToDo = function(todoText) {
    // now, no matter what, we'll push new ToDos
    // to the controller.
    self.todos.push({ text: todoText, completed: false });
  };

  self.removeToDo = function() {
    self.todos.pop();
  };
});
