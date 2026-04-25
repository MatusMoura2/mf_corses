import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LPython } from './l-python';

describe('LPython', () => {
  let component: LPython;
  let fixture: ComponentFixture<LPython>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LPython],
    }).compileComponents();

    fixture = TestBed.createComponent(LPython);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
