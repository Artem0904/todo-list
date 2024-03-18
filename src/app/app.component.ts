import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITask, TASKS } from './task';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTaskComponent } from "./add-task/add-task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';

  tasks: ITask[] = TASKS;

  constructor() { }

  removeTask(id: number): void {
    const index = this.tasks.findIndex(x => x.id === id);
    if (index !== -1)
      this.tasks.splice(index, 1);
  }

  createTask(task: ITask): void {
    this.tasks.push(task);
  }
}
