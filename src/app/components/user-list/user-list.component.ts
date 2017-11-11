import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../reducers/index';
import {IUserListItemModel} from '../../interfaces/user-list-item.interface';
import {Observable} from 'rxjs/Observable';
import {GetUserListAction, UpdateUserListOnSelectAction} from '../../actions/user.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList$: Observable<IUserListItemModel[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.userList$ = this.store.select('userList');
    this.store.dispatch(new GetUserListAction());
  }

  onUserSelectUser(event: IUserListItemModel) {    
    this.store.dispatch(new UpdateUserListOnSelectAction(event));
  }

}
