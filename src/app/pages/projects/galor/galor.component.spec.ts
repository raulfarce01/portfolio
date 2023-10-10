import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalorComponent } from './galor.component';

describe('GalorComponent', () => {
  let component: GalorComponent;
  let fixture: ComponentFixture<GalorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
