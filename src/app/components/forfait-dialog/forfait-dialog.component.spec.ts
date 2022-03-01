import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitDialogComponent } from './forfait-dialog.component';

describe('ForfaitDialogComponent', () => {
  let component: ForfaitDialogComponent;
  let fixture: ComponentFixture<ForfaitDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
