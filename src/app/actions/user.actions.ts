import * as ActionTypes from '../reducers/action-type-constans';
import {Action} from '@ngrx/store';
import {UserListItemModel} from '../interfaces/user-list-item.interface';

export class GetUserListSuccessAction implements Action {
    readonly type: string = ActionTypes.GET_USER_LIST_SUCCES;
    constructor(public payload: UserListItemModel[]) {} 
}

