import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommenPhotoComponent } from './recommen-photo.component';

describe('RecommenPhotoComponent', () => {
  let component: RecommenPhotoComponent;
  let fixture: ComponentFixture<RecommenPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommenPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommenPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
