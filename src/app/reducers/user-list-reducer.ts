import {Action} from '@ngrx/store';
import * as ActionTypes from '../actions/action-type-constans';
import {GetUserListSuccessAction} from '../actions/user.actions';
import {IUserListItemModel} from '../interfaces/user-list-item.interface';


export function userListReducer(state: IUserListItemModel[] = [], action: Action) {
    switch(action.type) {
        case ActionTypes.GET_USER_LIST_SUCCES: {
            return (action as GetUserListSuccessAction).payload;
        }
        default: {
            return state;
        }
    }
}