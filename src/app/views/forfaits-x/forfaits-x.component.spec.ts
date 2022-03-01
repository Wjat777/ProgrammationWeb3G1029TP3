import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitsXComponent } from './forfaits-x.component';

describe('ForfaitsXComponent', () => {
  let component: ForfaitsXComponent;
  let fixture: ComponentFixture<ForfaitsXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitsXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitsXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
