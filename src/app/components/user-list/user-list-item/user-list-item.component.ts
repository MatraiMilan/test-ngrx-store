import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IUserListItemModel} from '../../../interfaces/user-list-item.interface';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input() user: IUserListItemModel;
  @Output() onSelect: EventEmitter<any> = new EventEmitter();
  isSelected: boolean;
  
  constructor() {
    this.isSelected = false;
   }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = true;
    this.onSelect.emit(this.user);
  }

  onLostFocus() {
    this.isSelected = false;
  }

}
