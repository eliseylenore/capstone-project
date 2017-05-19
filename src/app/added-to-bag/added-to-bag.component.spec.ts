import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedToBagComponent } from './added-to-bag.component';

describe('AddedToBagComponent', () => {
  let component: AddedToBagComponent;
  let fixture: ComponentFixture<AddedToBagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedToBagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedToBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
