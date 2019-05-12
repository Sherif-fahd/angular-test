import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPumpComponent } from './list-pump.component';

describe('ListPumpComponent', () => {
  let component: ListPumpComponent;
  let fixture: ComponentFixture<ListPumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
