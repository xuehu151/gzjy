import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyPersonComponent } from './party-person.component';

describe('PartyPersonComponent', () => {
  let component: PartyPersonComponent;
  let fixture: ComponentFixture<PartyPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
