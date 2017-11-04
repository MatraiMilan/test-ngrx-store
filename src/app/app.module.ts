import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListItemComponent } from './components/user-list/user-list-item/user-list-item.component';
import {HttpModule} from '@angular/http';
import {Store, StoreModule} from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './effects/user.effects';
import {Reducers} from './reducers/index';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    UserListComponent,
    UserDetailsComponent,
    UserListItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(Reducers, {
      initialState: {
        userList: []
      }
    }),
    EffectsModule.forRoot([
      UserEffects
    ])
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
