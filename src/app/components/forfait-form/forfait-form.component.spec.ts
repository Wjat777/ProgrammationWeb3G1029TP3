import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitFormComponent } from './forfait-form.component';

describe('ForfaitFormComponent', () => {
  let component: ForfaitFormComponent;
  let fixture: ComponentFixture<ForfaitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
