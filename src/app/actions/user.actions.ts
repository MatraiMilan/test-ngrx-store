import * as ActionTypes from '../reducers/action-type-constans';
import {Action} from '@ngrx/store';
import {UserListItemModel} from '../components/user-list/user-list-item/user-list-item.model';

export class GetUserListSuccessAction implements Action {
    readonly type: string = ActionTypes.GET_USER_LIST_SUCCES;
    constructor(public payload: UserListItemModel[]) {} 
}

