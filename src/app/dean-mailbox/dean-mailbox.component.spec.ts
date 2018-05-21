import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeanMailboxComponent } from './dean-mailbox.component';

describe('DeanMailboxComponent', () => {
  let component: DeanMailboxComponent;
  let fixture: ComponentFixture<DeanMailboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeanMailboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeanMailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
