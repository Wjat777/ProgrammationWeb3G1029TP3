import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitsYComponent } from './forfaits-y.component';

describe('ForfaitsYComponent', () => {
  let component: ForfaitsYComponent;
  let fixture: ComponentFixture<ForfaitsYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitsYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitsYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
