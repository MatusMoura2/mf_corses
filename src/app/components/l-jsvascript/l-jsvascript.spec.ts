import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LJsvascript } from './l-jsvascript';

describe('LJsvascript', () => {
  let component: LJsvascript;
  let fixture: ComponentFixture<LJsvascript>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LJsvascript],
    }).compileComponents();

    fixture = TestBed.createComponent(LJsvascript);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
