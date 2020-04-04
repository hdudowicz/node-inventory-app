import { TestBed } from '@angular/core/testing';

import { ModifyItemService } from './modify-item.service';

describe('ModifyItemService', () => {
  let service: ModifyItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifyItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
