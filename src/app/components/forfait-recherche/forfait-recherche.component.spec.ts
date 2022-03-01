import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitRechercheComponent } from './forfait-recherche.component';

describe('ForfaitRechercheComponent', () => {
  let component: ForfaitRechercheComponent;
  let fixture: ComponentFixture<ForfaitRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitRechercheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
