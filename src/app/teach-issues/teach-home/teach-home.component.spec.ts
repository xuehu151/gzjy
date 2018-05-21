import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachHomeComponent } from './teach-home.component';

describe('TeachHomeComponent', () => {
  let component: TeachHomeComponent;
  let fixture: ComponentFixture<TeachHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
