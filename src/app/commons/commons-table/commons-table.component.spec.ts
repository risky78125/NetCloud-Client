import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonsTableComponent } from './commons-table.component';

describe('CommonsTableComponent', () => {
  let component: CommonsTableComponent;
  let fixture: ComponentFixture<CommonsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
