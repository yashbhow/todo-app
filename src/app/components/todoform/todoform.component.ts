import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';
import { v4 as uuidV4 } from 'uuid';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {

  todoTitle: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  addTodos = () => {
    const newTodo: Todo = {
      id: uuidV4(),
      title: this.todoTitle,
      date: new Date(),
      isComplete: false
    }

    this.todoService.addTodo(newTodo);
    this.todoTitle = "";
  }

}
