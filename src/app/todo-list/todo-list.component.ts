import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() removeEvent = new EventEmitter<number>();

  changeStatus(): void {
    this.task.status = !this.task.status;
  }
  remove(): void {
    this.removeEvent.emit(this.task.id);
  }
}