import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetinalDataSubComponent } from './retinal-data-sub.component';

describe('RetinalDataSubComponent', () => {
  let component: RetinalDataSubComponent;
  let fixture: ComponentFixture<RetinalDataSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetinalDataSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetinalDataSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
