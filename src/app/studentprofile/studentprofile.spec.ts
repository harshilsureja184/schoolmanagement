import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentprofile } from './studentprofile';

describe('Studentprofile', () => {
  let component: Studentprofile;
  let fixture: ComponentFixture<Studentprofile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studentprofile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studentprofile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
