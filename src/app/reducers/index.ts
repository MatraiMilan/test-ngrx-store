import {userListReducer} from './user-list-reducer';
import {ActionReducerMap} from '@ngrx/store';
import {IUserListItemModel} from '../interfaces/user-list-item.interface';

export interface AppState {
    userList: IUserListItemModel[]
}

export const Reducers: ActionReducerMap<AppState> = {
    userList: userListReducer
};