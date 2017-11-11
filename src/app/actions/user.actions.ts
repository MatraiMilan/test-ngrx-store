import * as ActionTypes from '../actions/action-type-constans';
import {Action} from '@ngrx/store';
import {IUserListItemModel} from '../interfaces/user-list-item.interface';

export class GetUserListAction implements Action {
    readonly type: string = ActionTypes.GET_USER_LIST;
}

export class GetUserListSuccessAction implements Action {
    readonly type: string = ActionTypes.GET_USER_LIST_SUCCES;
    constructor(public payload: IUserListItemModel[]) {} 
}

export class UpdateUserListOnSelectAction implements Action {
    readonly type: string = ActionTypes.UPDATE_USER_LIST_ON_SELECT;
    constructor(public payload: IUserListItemModel) {} 
}
