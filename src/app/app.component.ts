import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './users';
import { TasksComponent } from './tasks/tasks.component';
import { User } from './Types';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  // selectedUser: User | undefined = undefined;
  selectedUserId = 'u1';

  get selectedUser() {
    return DUMMY_USERS.find((user) => user.id === this.selectedUserId);
  }

  onUserSelection(id: string): any {
    console.log('Selected Id : ', id);
    this.selectedUserId = id;
    // const theUser = this.getSelectedUserName(id);
    // console.log(theUser);
    // this.selectedUser = theUser;
  }

  // getSelectedUserName(id: string): User | undefined {
  //   const user = DUMMY_USERS.find((user) => user.id === id);
  //   return user;
  // }
}
