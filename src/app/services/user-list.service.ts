import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IUserListItemModel } from '../interfaces/user-list-item.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserListService {

  constructor(private http: Http) { }

  getUserList() {
    return this.http.get('assets/resources/user-list.json');
  }

  sortUsersByName(userListArray): IUserListItemModel[] {
    return userListArray.sort((userA, userB) => {
      if (userA.name < userB.name) {
        return -1;
      } else if (userA.name > userB.name) {
        return 1;
      } else {
        return 0;
      }
    })
  }
}
