import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

import { type NewTask } from '../Types';

import { TaskService } from './task/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // @Input({ required: true }) user!: User | undefined;
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) userName!: string;

  isAddingTask: boolean = false;

  // private taskService : TaskService;

  // constructor(taskService : TaskService) {
  //   this.taskService = taskService;
  // }

  // is the same as this :

  constructor(private taskService: TaskService) {}

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.userId);
  }

  // onCompleteTask(id: string) {}

  onStartAddTask() {
    this.isAddingTask = true;
    // this.tasks.push({
    //   id: 't10',
    //   userId: 'u2',
    //   title: 'Master Solid',
    //   summary:
    //     'learn all the basic and advanced features of Solid and how to apply them',
    //   dueDate: '2021-05-31',
    // });
  }

  onCloseDialog() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTask) {
    this.isAddingTask = false;
  }
}
