import {Action} from '@ngrx/store';
import * as ActionTypes from '../actions/action-type-constans';
import {GetUserListSuccessAction, UpdateUserListOnSelectAction} from '../actions/user.actions';
import {IUserListItemModel} from '../interfaces/user-list-item.interface';
import {UserListReducerService} from '../services/user-list-reducer-service/user-list-reducer.service';


const service = new UserListReducerService();

export function userListReducer(state: IUserListItemModel[] = [], action: Action) {
    switch(action.type) {
        case ActionTypes.GET_USER_LIST_SUCCES: {
            return (action as GetUserListSuccessAction).payload;
        }
        case ActionTypes.UPDATE_USER_LIST_ON_SELECT: {
            const updateAction = action as UpdateUserListOnSelectAction;            
            state = service.updateStateBySelectedUser(state, updateAction);
            return [...state];
        }
        default: {
            return state;
        }
    }
}