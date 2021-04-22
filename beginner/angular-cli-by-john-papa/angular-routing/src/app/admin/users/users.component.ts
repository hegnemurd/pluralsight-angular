import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any[];
  hasPremission = true;

  constructor() {}

  ngOnInit() {
    if (this.hasPremission) {
      this.getUsers()
        .then((users) => (this.users = users))
        .catch((e) => console.log(e.message));
    } else {
      this.users = [];
    }
  }

  async getUsers() {
    return [
      { name: 'John', email: 'john@doe.com' },
      { name: 'Jane', email: 'jane@doe.com' },
    ];
  }
}
