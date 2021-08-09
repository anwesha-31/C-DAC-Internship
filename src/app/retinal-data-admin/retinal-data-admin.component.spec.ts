import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetinalDataAdminComponent } from './retinal-data-admin.component';

describe('RetinalDataAdminComponent', () => {
  let component: RetinalDataAdminComponent;
  let fixture: ComponentFixture<RetinalDataAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetinalDataAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetinalDataAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
