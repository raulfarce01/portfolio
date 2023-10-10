import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YumeanimeComponent } from './yumeanime.component';

describe('YumeanimeComponent', () => {
  let component: YumeanimeComponent;
  let fixture: ComponentFixture<YumeanimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YumeanimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YumeanimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
