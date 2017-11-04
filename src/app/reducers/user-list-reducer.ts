import {Action} from '@ngrx/store';
import * as ActionTypes from './action-type-constans';
import {UserListItemModel} from '../components/user-list/user-list-item/user-list-item.model';
import {GetUserListSuccessAction} from '../actions/user.actions';


export function userListReducer(state: UserListItemModel[] = [], action: Action) {
    switch(action.type) {
        case ActionTypes.GET_USER_LIST_SUCCES: {
            return (action as GetUserListSuccessAction).payload;
        }
        default: {
            return state;
        }
    }
}