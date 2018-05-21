import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelonghomeComponent } from './belonghome.component';

describe('BelonghomeComponent', () => {
  let component: BelonghomeComponent;
  let fixture: ComponentFixture<BelonghomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelonghomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelonghomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
