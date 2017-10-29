import {Action} from '@ngrx/store';
import * as ActionTypes from './action-type-constans';

const INITIAL_STATE = [];

interface IGetUserListItemAction extends Action {
    payload: any;
}

export function userListReducer(state = INITIAL_STATE, action: IGetUserListItemAction) {
    switch(action.type) {
        case ActionTypes.GET_USER_LIST_SUCCES: {
            return [...state, action.payload];
        }
        default: {
            return state;
        }
    }
}