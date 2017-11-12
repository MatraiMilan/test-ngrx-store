import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IUserListItemModel} from '../../../interfaces/user-list-item.interface';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input() user: IUserListItemModel;
  @Input() index: number;
  @Input() isSelected: boolean;
  @Output() onSelected: EventEmitter<number> = new EventEmitter();
  
  constructor() {}

  ngOnInit() {
  }

  onSelect() {    
    this.onSelected.emit(this.index);
  }
}
