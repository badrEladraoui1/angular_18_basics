import { Injectable } from '@angular/core';
import { NewTask, Task } from '../../Types';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
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

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) this.tasks = JSON.parse(tasks);
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });
    this.saveTask();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTask();
  }

  private saveTask() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
