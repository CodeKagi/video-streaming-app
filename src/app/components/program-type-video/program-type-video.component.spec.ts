import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramTypeVideoComponent } from './program-type-video.component';

describe('ProgramTypeVideoComponent', () => {
  let component: ProgramTypeVideoComponent;
  let fixture: ComponentFixture<ProgramTypeVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramTypeVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramTypeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
