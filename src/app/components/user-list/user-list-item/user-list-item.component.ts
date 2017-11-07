import { Component, OnInit, Input } from '@angular/core';
import {IUserListItemModel} from '../../../interfaces/user-list-item.interface';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input() user: IUserListItemModel;

  constructor() { }

  ngOnInit() {
  }

}
