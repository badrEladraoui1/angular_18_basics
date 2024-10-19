import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

import { type Task } from '../Types';
import { type NewTask } from '../Types';

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

  tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'learn all the basic and advanced features of Angular and how to apply them',
      dueDate: '2024-05-31',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Build React App',
      summary: 'Create a full-featured React app using hooks and context API',
      dueDate: '2024-06-15',
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Explore Next.js',
      summary:
        'Understand server-side rendering and static site generation in Next.js',
      dueDate: '2024-07-01',
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Learn Python for Data Science',
      summary:
        'Go through the basics of Python and its application in data analysis',
      dueDate: '2024-06-30',
    },
    {
      id: 't5',
      userId: 'u2',
      title: 'Build REST API with Node.js',
      summary: 'Create a secure REST API using Express and MongoDB',
      dueDate: '2024-06-20',
    },
    {
      id: 't6',
      userId: 'u2',
      title: 'Understand Machine Learning Basics',
      summary:
        'Get a strong foundation in machine learning algorithms and techniques',
      dueDate: '2024-07-10',
    },
    {
      id: 't7',
      userId: 'u3',
      title: 'Start with TypeScript',
      summary:
        'Learn the basics of TypeScript and integrate it with JavaScript projects',
      dueDate: '2024-05-25',
    },
    {
      id: 't8',
      userId: 'u3',
      title: 'Develop Portfolio Website',
      summary: 'Build a personal portfolio using HTML, CSS, and JavaScript',
      dueDate: '2024-06-05',
    },
    {
      id: 't9',
      userId: 'u3',
      title: 'Learn Git and GitHub',
      summary: 'Master version control with Git and collaboration on GitHub',
      dueDate: '2024-06-20',
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

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
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });

    this.isAddingTask = false;
  }
}
