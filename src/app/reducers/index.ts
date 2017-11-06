import {userListReducer} from './user-list-reducer';
import {ActionReducerMap} from '@ngrx/store';
import {UserListItemModel} from '../interfaces/user-list-item.interface';

interface AppState {
    userList: UserListItemModel[]
}

export const Reducers: ActionReducerMap<AppState> = {
    userList: userListReducer
};