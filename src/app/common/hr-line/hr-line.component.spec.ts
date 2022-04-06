import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrLineComponent } from './hr-line.component';

describe('HrLineComponent', () => {
  let component: HrLineComponent;
  let fixture: ComponentFixture<HrLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
