import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  list = [1, 2, 3, 4, 5];
  isLogIn: boolean = false;
  isLogOut: boolean = true;
  //track for
  studentArr: any[] = [
    {
      id: 1,
      name: 'Prashant',
    },
    {
      id: 2,
      name: 'Akash',
    },
    {
      id: 3,
      name: 'Ravi',
    },
    {
      id: 4,
      name: 'Prakash',
    },
  ];

  users: User[] = [
    {
      userId: 1,
      userName: 'User1',
    },
    {
      userId: 2,
      userName: 'User2',
    },
    new User(),
  ];

  trackByData(index: number, studentArr: any): number {
    return studentArr.id;
  }

  logInName = 'admin';
  name1: string = 'Prashant';
}
