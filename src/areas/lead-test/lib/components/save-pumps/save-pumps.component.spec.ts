import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePumpsComponent } from './save-pumps.component';

describe('SavePumpsComponent', () => {
  let component: SavePumpsComponent;
  let fixture: ComponentFixture<SavePumpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavePumpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePumpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
