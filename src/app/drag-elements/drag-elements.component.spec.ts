import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragElementsComponent } from './drag-elements.component';

describe('DragElementsComponent', () => {
  let component: DragElementsComponent;
  let fixture: ComponentFixture<DragElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
