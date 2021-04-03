import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        id: "11",
        title: "test title 1",
        isComplete: false,
        date: new Date()
      },
      {
        id: "22",
        title: "test title 2",
        isComplete: true,
        date: new Date()
      },
      {
        id: "33",
        title: "test title 3",
        isComplete: false,
        date: new Date()
      },
    ];
  }

  getTodos = () => {
    return of(this.todos);
  }

  addTodo = (todo: Todo) => {
    this.todos.push(todo);
  }

  changeStatus = (todo: Todo) => {
    this.todos.map(everySingleTodo => {
      if (everySingleTodo.id === todo.id) {
        todo.isComplete = !todo.isComplete;
      }
    });
  }

  deleteTodo = (todo: Todo) => {
    const indexOfTodo = this.todos.findIndex(
      (currentObj) => currentObj.id === todo.id
    );
    this.todos.splice(indexOfTodo, 1);
  }
}
