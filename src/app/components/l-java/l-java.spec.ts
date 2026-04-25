import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LJava } from './l-java';

describe('LJava', () => {
  let component: LJava;
  let fixture: ComponentFixture<LJava>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LJava],
    }).compileComponents();

    fixture = TestBed.createComponent(LJava);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
