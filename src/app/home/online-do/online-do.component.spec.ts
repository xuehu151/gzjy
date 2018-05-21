import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineDoComponent } from './online-do.component';

describe('OnlineDoComponent', () => {
  let component: OnlineDoComponent;
  let fixture: ComponentFixture<OnlineDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
