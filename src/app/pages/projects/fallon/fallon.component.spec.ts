import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FallonComponent } from './fallon.component';

describe('FallonComponent', () => {
  let component: FallonComponent;
  let fixture: ComponentFixture<FallonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FallonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FallonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
