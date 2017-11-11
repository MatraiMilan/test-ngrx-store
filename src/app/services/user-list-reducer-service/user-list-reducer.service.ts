import { Injectable } from '@angular/core';
import {IUserListItemModel} from '../../interfaces/user-list-item.interface';
import {UpdateUserListOnSelectAction} from '../../actions/user.actions';

@Injectable()
export class UserListReducerService {

  constructor() { }

  updateStateBySelectedUser(state: IUserListItemModel[], action: UpdateUserListOnSelectAction): IUserListItemModel[] {
    state.forEach(userListItem => userListItem.isSelected = false);
    state.find(userListItem => userListItem.name === action.payload.name)
        .isSelected = true;
    return state;
  }

}
