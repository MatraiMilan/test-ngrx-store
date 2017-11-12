import {Effect, Actions} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Action, Store} from '@ngrx/store';
import {UserListService} from '../services/user-list-service/user-list.service';

import * as ActionTypeConstants from '../actions/action-type-constans';
import {GetUserListSuccessAction} from '../actions/user.actions';
import {AppState} from '../reducers/index';
import {IUserListItemModel} from '../interfaces/user-list-item.interface';

@Injectable()
export class UserEffects {

    constructor(private actions: Actions, private userListService: UserListService, private http: Http) {}

    @Effect()
    getUserList: Observable<GetUserListSuccessAction> = this.actions
        .ofType(ActionTypeConstants.GET_USER_LIST)
        .switchMap(() => this.userListService.getUserList()
            .map(result => result.json())
            .map(data => this.userListService.sortUsersByName(data))
            .map(sortedData => {
                return new GetUserListSuccessAction(sortedData);
            })
        );
}