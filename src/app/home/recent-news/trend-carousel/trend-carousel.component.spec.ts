import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendCarouselComponent } from './trend-carousel.component';

describe('TrendCarouselComponent', () => {
  let component: TrendCarouselComponent;
  let fixture: ComponentFixture<TrendCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
