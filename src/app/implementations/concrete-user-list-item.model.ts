import {IUserListItemModel} from '../interfaces/user-list-item.interface';

export class ConcreteUserListItemModel implements IUserListItemModel {
    constructor(public name: string) {}
}