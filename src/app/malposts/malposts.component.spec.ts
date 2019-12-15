import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalpostsComponent } from './malposts.component';

describe('MalpostsComponent', () => {
  let component: MalpostsComponent;
  let fixture: ComponentFixture<MalpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
