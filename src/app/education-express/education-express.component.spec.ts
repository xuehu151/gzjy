import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationExpressComponent } from './education-express.component';

describe('EducationExpressComponent', () => {
  let component: EducationExpressComponent;
  let fixture: ComponentFixture<EducationExpressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationExpressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
