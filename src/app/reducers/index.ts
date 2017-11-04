import {userListReducer} from './user-list-reducer';
import {ActionReducerMap} from '@ngrx/store';
import {UserListItemModel} from '../components/user-list/user-list-item/user-list-item.model';

interface AppState {
    userList: UserListItemModel[]
}

export const Reducers: ActionReducerMap<AppState> = {
    userList: userListReducer
};