import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyHomeComponent } from './party-home.component';

describe('PartyHomeComponent', () => {
  let component: PartyHomeComponent;
  let fixture: ComponentFixture<PartyHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
