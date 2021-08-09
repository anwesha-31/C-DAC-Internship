import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseDiagnosticComponent } from './disease-diagnostic.component';

describe('DiseaseDiagnosticComponent', () => {
  let component: DiseaseDiagnosticComponent;
  let fixture: ComponentFixture<DiseaseDiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseaseDiagnosticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
