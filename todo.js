function todoService() {
  this.todoList = ['reading'];
}

todoService.prototype.getTodoList = function() {
  return this.todoList;
};

todoService.prototype.addTodo = function(todoItem) {
  this.todoList.push(todoItem);
};

todoService.prototype.updateTodo = function(index, todoItem) {
  this.todoList[index] = todoItem;
};

module.exports = todoService;