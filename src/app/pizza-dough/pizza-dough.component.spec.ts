import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDoughComponent } from './pizza-dough.component';

describe('PizzaDoughComponent', () => {
  let component: PizzaDoughComponent;
  let fixture: ComponentFixture<PizzaDoughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaDoughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDoughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
