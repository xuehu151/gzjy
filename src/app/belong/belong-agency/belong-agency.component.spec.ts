import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelongAgencyComponent } from './belong-agency.component';

describe('BelongAgencyComponent', () => {
  let component: BelongAgencyComponent;
  let fixture: ComponentFixture<BelongAgencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelongAgencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelongAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
