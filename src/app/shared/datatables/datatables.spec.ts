import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datatables } from './datatables';

describe('Datatables', () => {
  let component: Datatables;
  let fixture: ComponentFixture<Datatables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datatables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datatables);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
