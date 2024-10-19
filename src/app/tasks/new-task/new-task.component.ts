import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTask } from '../../Types';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() closeDialog = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCloseDialog() {
    return this.closeDialog.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    });
  }
}
