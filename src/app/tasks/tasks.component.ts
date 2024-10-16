import { Component, Input } from '@angular/core';
import { User } from '../Types';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // @Input({ required: true }) user!: User | undefined;
  @Input() userName?: string;
}
