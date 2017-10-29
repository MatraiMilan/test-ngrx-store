import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListItemComponent } from './components/user-list/user-list-item/user-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    UserListComponent,
    UserDetailsComponent,
    UserListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
