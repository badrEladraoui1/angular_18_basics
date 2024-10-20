import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { type User } from '../Types';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) name!: string;
  // @Input({ required: true }) avatar!: string;
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => 'assets/' + this.avatar());

  get imagePath() {
    return 'assets/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
