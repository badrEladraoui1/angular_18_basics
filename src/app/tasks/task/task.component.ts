import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Task } from '../../Types';
import { DatePipe } from '@angular/common';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) userTask!: Task;
  // @Output() complete = new EventEmitter<string>();

  private taskService = inject(TaskService);

  onCompleteTask() {
    this.taskService.removeTask(this.userTask.id);
  }

  // onCompleteTask() {
  //   this.complete.emit(this.userTask.id);
  // }
}
