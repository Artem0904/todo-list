import { Component, EventEmitter, Output } from '@angular/core';
import { ITask } from '../task';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  @Output() submitEvent = new EventEmitter<ITask>();

  creationForm = this.fb.group({
    id: [0],
    description: ['', Validators.minLength(5)],
    status: [false],
    date: [new Date()],
  });

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {

    // check model is valid
    if (!this.creationForm.valid) {
      alert("Invalid data!");
      return;
    }

    // get created task
    const task = this.creationForm.value as ITask;
    // send new task to parent component
    this.submitEvent.emit(task);
  }
}
