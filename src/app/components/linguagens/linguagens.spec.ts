import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Linguagens } from './linguagens';

describe('Linguagens', () => {
  let component: Linguagens;
  let fixture: ComponentFixture<Linguagens>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Linguagens],
    }).compileComponents();

    fixture = TestBed.createComponent(Linguagens);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
