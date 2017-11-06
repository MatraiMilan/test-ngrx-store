import {Effect, Actions} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Action, Store} from '@ngrx/store';
import {UserListService} from '../services/user-list.service';

import * as ActionTypeConstants from '../actions/action-type-constans';
import {GetUserListSuccessAction} from '../actions/user.actions';

@Injectable()
export class UserEffects {

    constructor(private actions: Actions, private userListService: UserListService, private store: Store<any>) {}

    @Effect()
    getUserList: Observable<any> = this.actions.ofType(ActionTypeConstants.GET_USER_LIST)
        .map(() => this.userListService.getUserList())
        .map(data => this.store.dispatch(new GetUserListSuccessAction(Array.from(data))) 
        );
}