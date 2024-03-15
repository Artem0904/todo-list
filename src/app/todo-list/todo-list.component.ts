import { Component, Input } from '@angular/core';
import { ITask } from '../task';
import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  imports: [LowerCasePipe, UpperCasePipe, DatePipe]
})
export class TodoListComponent {
  @Input()
  task: ITask = {
    id: 0,
    description: "",
    status: false
  };

  changeRole(): void {
    this.task.status = !this.task.status;
  }

}