import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../task';
import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  imports: [LowerCasePipe, UpperCasePipe, DatePipe, ReactiveFormsModule]
})
export class TodoListComponent {
  
  @Input()
  task: ITask = {
    id: 0,
    description: "",
    status: false
  };

  creationForm = this.fb.group({
    id: [this.task.id],
    description: [this.task.description],
    status: [this.task.status],
    date: [this.task.date],
  });

  constructor(private fb: FormBuilder) { }

  @Output() removeEvent = new EventEmitter<number>();

  changeStatus(): void {
    this.task.status = !this.task.status;
  }
  remove(): void {
    this.removeEvent.emit(this.task.id);
  }
}