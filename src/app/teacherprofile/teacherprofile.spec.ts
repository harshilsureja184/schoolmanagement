import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teacherprofile } from './teacherprofile';

describe('Teacherprofile', () => {
  let component: Teacherprofile;
  let fixture: ComponentFixture<Teacherprofile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Teacherprofile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Teacherprofile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
