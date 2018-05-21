import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgLinkComponent } from './img-link.component';

describe('ImgLinkComponent', () => {
  let component: ImgLinkComponent;
  let fixture: ComponentFixture<ImgLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
