import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetLawComponent } from './internet-law.component';

describe('InternetLawComponent', () => {
  let component: InternetLawComponent;
  let fixture: ComponentFixture<InternetLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
