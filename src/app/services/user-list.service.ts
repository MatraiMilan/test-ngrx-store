import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {UserListItemModel} from '../interfaces/user-list-item.interface';

@Injectable()
export class UserListService {

  constructor(private http: Http) { }

  getUserList: () => UserListItemModel[] = function() {
    return this.http.get('../resources/user-list.json')
      .subscribe(
        res => res.json(),
        err => console.log('Error on get user list: ', err),
        () => console.log('Get user list is completed'));
  }
}
