import { TestBed, inject } from '@angular/core/testing';

import { UserListReducerService } from './user-list-reducer.service';

describe('UserListReducerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserListReducerService]
    });
  });

  it('should be created', inject([UserListReducerService], (service: UserListReducerService) => {
    expect(service).toBeTruthy();
  }));
});
