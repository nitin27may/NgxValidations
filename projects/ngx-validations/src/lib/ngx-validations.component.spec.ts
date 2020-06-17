import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxValidationsComponent } from './ngx-validations.component';

describe('NgxValidationsComponent', () => {
  let component: NgxValidationsComponent;
  let fixture: ComponentFixture<NgxValidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxValidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
