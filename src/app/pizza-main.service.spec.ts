import { TestBed } from '@angular/core/testing';

import { PizzaMainService } from './pizza-main.service';

describe('PizzaMainService', () => {
  let service: PizzaMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
